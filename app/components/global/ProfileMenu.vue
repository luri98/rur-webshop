<template>
    <div class="fixed top-0 bottom-0 right-0 flex flex-col w-full sm:max-w-xs p-6 bg-gray-50">
        <button class="ml-auto cursor-pointer hover:scale-110"
            @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="flex flex-col space-y-2 mt-2" v-if="user">
            <div class="flex flex-col items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20" v-if="user">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span class="text-lg font-bold text-center">{{ user.name }}</span>
                <div class="flex items-center justify-center space-x-2 w-full">
                    <svg class="size-6 shrink-0" 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span class="truncate text-sm">{{ user.email }}</span></div>
            </div>
            <div class="flex items-center justify-center space-x-4 mt-4 ">
                <nuxt-link to="/profil" 
                    class="flex items-center justify-center space-x-2 h-11 w-24 text-sm bg-primary hover:bg-primary/90 transition-all text-white rounded-lg cursor-pointer">
                    <span class="font-medium">Profil</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </nuxt-link>
                <button class="flex items-center justify-center space-x-1.5 h-11 w-24 text-sm bg-gray-200 hover:bg-gray-300/70 transition-all rounded-lg cursor-pointer">
                    <span class="font-medium">Odjava</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                </button>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        props: {
            user: { type: Object, required: true },
        },
    }
</script>
