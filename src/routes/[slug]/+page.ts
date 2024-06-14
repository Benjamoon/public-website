import type { Post } from "$lib/types";
import type { PageLoad } from "./$types";
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
    try {
        const post = await import(`../../posts/${params.slug}.md`);

        return {
            content: post.default,
            metadata: post.metadata as Post
        }
    } catch (e) {
        return error(404, `Could not find post with slug ${params.slug}`);
    }
};