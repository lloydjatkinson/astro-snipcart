export type Documentation = {
    name: string;
    description: string;
    layout?: string;
    framework?: 'astro' | 'alpine';
    state: 'review' | 'wip' | 'ready' | 'deprecated' | 'experimental';
}