/**
 * @license
 * Copyright 2026 Dastyar (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, expect, it, vi } from 'vitest';
import { detectStartupArchitectureMismatch } from '@/process/startup/architectureCompatibility';

const sysctl = (values: Record<string, number>) =>
  vi.fn((_command: string, args: string[]) => {
    const value = values[args[1]];
    return value === undefined ? '0' : String(value);
  });

describe('startup architecture compatibility', () => {
  it('rejects a native x64 launch on Apple Silicon without Rosetta', () => {
    const mismatch = detectStartupArchitectureMismatch({
      arch: 'x64',
      isPackaged: true,
      platform: 'darwin',
      execFileSync: sysctl({ 'sysctl.proc_translated': 0, 'hw.optional.arm64': 1 }),
    });
    expect(mismatch?.expectedDownloadArch).toBe('arm64');
  });

  it('allows an x64 package running under Rosetta', () => {
    const mismatch = detectStartupArchitectureMismatch({
      arch: 'x64',
      isPackaged: true,
      platform: 'darwin',
      execFileSync: sysctl({ 'sysctl.proc_translated': 1, 'hw.optional.arm64': 1 }),
    });
    expect(mismatch).toBeNull();
  });

  it('allows x64 on Intel', () => {
    const mismatch = detectStartupArchitectureMismatch({
      arch: 'x64',
      isPackaged: true,
      platform: 'darwin',
      execFileSync: sysctl({}),
    });
    expect(mismatch).toBeNull();
  });
});
