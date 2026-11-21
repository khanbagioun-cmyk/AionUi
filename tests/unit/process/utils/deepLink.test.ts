/**
 * @license
 * Copyright 2026 Dastyar (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, expect, it, vi } from 'vitest';

vi.mock('@/common', () => ({
  ipcBridge: { deepLink: { received: { emit: vi.fn() } } },
}));

import { parseDeepLinkUrl, PROTOCOL_SCHEME } from '@/process/utils/deepLink';

describe('deep link parsing', () => {
  it('uses the Dastyar scheme', () => {
    expect(PROTOCOL_SCHEME).toBe('dastyar');
  });

  it('rejects the AionUi scheme', () => {
    expect(parseDeepLinkUrl('aionui://add-provider?base_url=x')).toBeNull();
  });

  it('parses provider details from a Dastyar link', () => {
    const parsed = parseDeepLinkUrl('dastyar://add-provider?base_url=https%3A%2F%2Fapi.example.test%2Fv1');
    expect(parsed?.action).toBe('add-provider');
    expect(parsed?.params.base_url).toBe('https://api.example.test/v1');
  });
});
