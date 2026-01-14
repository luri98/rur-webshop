<template>
    <nav class="relative flex items-center h-16 px-4 bg-primary">
        <div class="flex items-center justify-between w-full max-w-7xl mx-auto">
            <div class="lg:hidden flex items-center space-x-6 shrink-0">
                <!-- Drawer Button -->
                <button @click="">
                    <svg class="size-6 text-white hover:text-white/70 cursor-pointer" 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <!-- Search -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <!-- Logo -->
            <a href="/" class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0 lg:relative shrink-0">
                <div class="flex items-center justify-center p-1 bg-white rounded-full ring-2 ring-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                </div>
            </a>
            <!-- Search -->
            <UISearch 
                id="product_search"
                class="hidden lg:flex max-w-xs" 
                placeholder="Pretraži..."/>
            <div class="flex items-center space-x-6">
                <button class="cursor-pointer group"
                    @click="openProfileMenu()"
                    v-if="user">
                    <svg class="size-6 text-white hover:text-white/70"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </button>
                <nuxt-link to="/prijava"
                    class="hidden lg:flex font-semibold text-white" v-else>Prijavi se</nuxt-link>
                
                <a href="/"
                    class="flex items-center space-x-2 group text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 group-hover:text-white/70">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <div class="font-semibold min-w-5 group-hover:text-white/70">0</div>
                </a>
            </div>
        </div>
    </nav>
    <transition 
        enter-from-class="transform translate-x-full opacity-0 " 
        enter-active-class="duration-300 ease-out"
        enter-to-class="opacity-100" 
        leave-from-class="opacity-100" 
        leave-active-class="duration-300 ease-in"
        leave-to-class="translate-x-full opacity-0">
        <ProfileMenu 
            :user="user"
            v-click-outside="closeProfileMenu"
            @close="closeProfileMenu"
            v-if="isVisibleProfileMenu"/>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                isVisibleProfileMenu: false,

                user: {
                    id: 1,
                    name: 'Luka Milaš',
                    email: 'lukamilas@blackdot.co.me',
                    phone: '+38267232445'
                },

                // user:null
            }
        },

        methods: {
            openProfileMenu() {
                this.isVisibleProfileMenu = true
            },

            closeProfileMenu() {
                this.isVisibleProfileMenu = false
            }
        },
    }
</script>
