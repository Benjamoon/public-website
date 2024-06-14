<script lang="ts">
	import { formatDate } from '$lib/utils'

    export let data;
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.metadata.title} />
    <meta property="og:description" content={data.metadata.description} />
</svelte:head>

<article>
    <hgroup>
        <h1>{data.metadata.title}</h1>
        <p>Published at {formatDate(data.metadata.date)}</p>
    </hgroup>

    <div class="tags">
        {#each data.metadata.catagories as cat}
            <span class="surface-4">&num;{cat}</span>
        {/each}
    </div>

    <div class="prose">
        <svelte:component this={data.content} />
    </div>
</article>

<style>
    article {
        max-inline-size: var(--size-content-3);
    }

    h1 {
        text-transform: capitalize;
    }

    h1 + p {
        margin-top: var(--size-2);
        color: var(--text-2)
    }

    .tags {
        display: flex;
        gap: var(--size-3);
        margin-top: var(--size-7);
    }

    .tags > * {
        padding: var(--size-2) var(--size-3);
        border-radius: var(--radius-round);
    }
</style>