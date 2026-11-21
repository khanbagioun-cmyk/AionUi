/**
 * @license
 * Copyright 2026 Dastyar (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const state = vi.hoisted(() => ({
  packaged: true,
  home: '',
  userData: '',
}));

vi.mock('@/common/platform', () => ({
  getPlatformServices: () => ({
    paths: {
      getDataDir: () => state.userData,
      getHomeDir: () => state.home,
      getTempDir: () => os.tmpdir(),
      isPackaged: () => state.packaged,
      needsCliSafeSymlinks: () => process.platform === 'darwin',
    },
  }),
}));

import { getConfigPath, getDataPath, getTempPath } from '@/process/utils/utils';

let root: string;

beforeEach(() => {
  root = fs.mkdtempSync(path.join(os.tmpdir(), 'dastyar-data-'));
  state.home = path.join(root, 'home-dir');
  state.userData = path.join(root, 'Application Support', 'Dastyar');
  fs.mkdirSync(state.home, { recursive: true });
  fs.mkdirSync(state.userData, { recursive: true });
  state.packaged = true;
  delete process.env.DASTYAR_HOME;
});

afterEach(() => {
  delete process.env.DASTYAR_HOME;
  fs.rmSync(root, { recursive: true, force: true });
});

describe('Dastyar path isolation', () => {
  it('uses the packaged home directory below userData', () => {
    expect(getDataPath()).toBe(path.join(state.userData, 'home'));
  });

  it('honors DASTYAR_HOME for the data directory', () => {
    const custom = path.join(root, 'custom-home');
    process.env.DASTYAR_HOME = custom;
    expect(getDataPath()).toBe(custom);
  });

  it('isolates the temp work directory from AionUi', () => {
    expect(getTempPath()).toBe(path.join(os.tmpdir(), 'dastyar'));
  });

  it('keeps dev data and config behind Dastyar-named symlinks', () => {
    state.packaged = false;
    state.userData = path.join(root, 'Application Support', 'Dastyar-Dev');
    fs.mkdirSync(state.userData, { recursive: true });

    const data = getDataPath();
    const config = getConfigPath();

    if (process.platform === 'darwin') {
      expect(data).toBe(path.join(state.home, '.dastyar-dev'));
      expect(config).toBe(path.join(state.home, '.dastyar-config-dev'));
      expect(fs.realpathSync(data)).toBe(fs.realpathSync(path.join(state.userData, 'home')));
      expect(fs.realpathSync(config)).toBe(fs.realpathSync(path.join(state.userData, 'config')));
    } else {
      expect(data).toBe(path.join(state.userData, 'home'));
      expect(config).toBe(path.join(state.userData, 'config'));
    }
  });
});
