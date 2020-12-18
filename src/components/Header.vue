<template>
    <header class="text-center flex flex-col justify-center -space-y-2">
        <a :href="url">
            <img src="/spotify.png" class="h-auto w-48 sm:w-56 mx-auto pb-4" />
            <div class="space-y-1">
                <p class="text-4xl sm:text-6xl font-semibold text-teal-500">
                    <span class="font-black text-green-500">Spotify</span>
                    Premium
                    <span class="font-thin text-cyan-500">Playlists</span>
                </p>
                <p class="text-lg sm:text-2xl font-medium">
                    A better way to discover new playlists
                </p>
            </div>
        </a>
    </header>
</template>

<script setup>
    const url = window.location.origin
</script>
