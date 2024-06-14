<script lang="ts">
	import { page } from '$app/stores'
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>Blog</a>
		</li>
		<li>
			<a href="/about" class:active={$page.url.pathname.startsWith('/about')}>About</a>
		</li>
		<li>
			<a href="/contact" class:active={$page.url.pathname.startsWith('/contact')}>Contact</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

    <Toggle />
</nav>

<style>
    nav {
        padding-block: var(--size-7)
    }

    .links {
        margin-block: var(--size-7);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a.active {
        font-weight: bold;
        text-decoration: underline;
    }

    @media (min-width: 768px) {
        nav {
            display: flex;
            justify-content: space-between;
        }

        .links {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }
    }
</style>
