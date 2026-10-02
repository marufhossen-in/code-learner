import { describe, expect, it } from 'vitest';
import type { GitAction, GitState } from '../../components/visuals/gitSim';
import { gitReducer, initialGitState } from '../../components/visuals/gitSim';

function run(state: GitState, ...actions: GitAction[]): GitState {
  return actions.reduce((s, a) => gitReducer(s, a).state, state);
}

describe('git simulator (Section 11)', () => {
  it('commands before init fail with a helpful message', () => {
    const r = gitReducer(initialGitState(), { type: 'add' });
    expect(r.out).toContain('not a git repository');
    expect(r.caption.bn.length).toBeGreaterThan(0);
  });

  it('init creates the repo, main branch and an untracked README', () => {
    const s = run(initialGitState(), { type: 'init' });
    expect(s.initialized).toBe(true);
    expect(s.localBranches).toEqual([{ name: 'main', tip: null }]);
    expect(s.head).toBe('main');
    expect(s.working).toContain('README.md');
  });

  it('add moves files from working to staging; commit needs staging', () => {
    let s = run(initialGitState(), { type: 'init' });
    const r = gitReducer(s, { type: 'commit' });
    expect(r.out).toContain('nothing to commit');
    s = run(s, { type: 'add' });
    expect(s.staged).toContain('README.md');
    expect(s.working).toHaveLength(0);
  });

  it('commit creates c1 with the staged content and moves the branch tip', () => {
    const s = run(initialGitState(), { type: 'init' }, { type: 'edit' }, { type: 'add' }, { type: 'commit' });
    expect(s.local).toHaveLength(1);
    expect(s.local[0].id).toBe('c1');
    expect(s.staged).toHaveLength(0);
    expect(s.localBranches[0].tip).toBe('c1');
  });

  it('chained commits form parent links', () => {
    const s = run(
      initialGitState(),
      { type: 'init' }, { type: 'add' }, { type: 'commit' },
      { type: 'edit' }, { type: 'add' }, { type: 'commit' },
    );
    expect(s.local[1].parents).toEqual(['c1']);
  });

  it('the full branch + merge flow produces a two-parent merge commit', () => {
    const s = run(
      initialGitState(),
      { type: 'init' }, { type: 'add' }, { type: 'commit' },
      { type: 'branch', name: 'feature' },
      { type: 'edit' }, { type: 'add' }, { type: 'commit' },
      { type: 'switch', name: 'main' },
      { type: 'edit' }, { type: 'add' }, { type: 'commit' },
      { type: 'merge', name: 'feature' },
    );
    const mergeCommit = s.local[s.local.length - 1];
    expect(mergeCommit.parents).toHaveLength(2);
    expect(s.head).toBe('main');
    // feature commits exist, tips differ before merge, and branches list grew
    expect(s.localBranches.map((b) => b.name)).toEqual(['main', 'feature']);
    expect(s.local.length).toBe(4); // c1 main, c2 feature, c3 main, c4 merge
  });

  it('push copies history to the remote; second push reports up-to-date', () => {
    const s = run(initialGitState(), { type: 'init' }, { type: 'add' }, { type: 'commit' }, { type: 'push' });
    expect(s.remote).toHaveLength(1);
    const r = gitReducer(s, { type: 'push' });
    expect(r.out).toContain('up-to-date');
  });

  it('teammate push + pull fast-forwards the local branch', () => {
    const s = run(
      initialGitState(),
      { type: 'init' }, { type: 'add' }, { type: 'commit' }, { type: 'push' },
      { type: 'teammate' },
    );
    // local is behind: remote has r1, local does not
    expect(s.remote[s.remote.length - 1].id).toBe('r1');
    expect(s.local.some((c) => c.id === 'r1')).toBe(false);
    const pulled = gitReducer(s, { type: 'pull' });
    expect(pulled.state.local.some((c) => c.id === 'r1')).toBe(true);
    const mainTip = pulled.state.localBranches.find((b) => b.name === 'main')!.tip;
    expect(mainTip).toBe('r1');
  });

  it('reset returns to a clean slate', () => {
    const s = run(initialGitState(), { type: 'init' }, { type: 'add' }, { type: 'commit' });
    const r = gitReducer(s, { type: 'reset' });
    expect(r.state.initialized).toBe(false);
    expect(r.state.local).toHaveLength(0);
  });
});
