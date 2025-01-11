<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header
	class="bg-hero flex w-full justify-center gap-0 bg-cover bg-center bg-no-repeat px-8 py-16 max-lg:flex-col sm:gap-16 sm:p-16 lg:items-center"
>
	<div class="flex flex-1 flex-col gap-10">
		<img src="/logo.svg" alt="logo" width={101} height={96} />
		<h1 class="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
			Explore The <span class="red-gradient">Diverse Realms</span> of Anime Magic
		</h1>
	</div>
	<div class="lg:flex-1 relative w-full h-[50vh] justify-center">
		<img src='/anime.png' alt="anime"  class="object-contain h-full " />
	  </div>
</header>


{@render children()}

<footer class="felx-wrap bg-[#161921 flex items-center justify-between gap-2 px-8 py-4 sm:px-16">
	<p class="text-base font-bold text-white">@2025 Anime Vault</p>
	<img src="/logo.svg" alt="logo" width={47} height={44} class="object-contain" />
	<div class="flex items-center gap-6">
		<img src="/tiktok.svg" alt="tiktok logo" class="object-contain" />
		<img src="/instagram.svg" alt="instagram logo" class="object-contain" />
		<img src="/twitter.svg" alt="twitter logo" class="object-contain" />
	</div>
</footer>
