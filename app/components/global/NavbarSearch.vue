<template>
    <div class="flex flex-col">
        <button
            :id="id"
            class="cursor-pointer"
            :class="{ 'pointer-events-none': disabled || isTransitioning }"
            @click="toggle()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white pointer-events-none" 
                v-if="!isVisible">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-yellow-300 pointer-events-none" 
                v-else>
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        <transition 
            enter-active-class="transition ease-out duration-100" 
            enter-from-class="transform opacity-0" 
            enter-to-class="transform opacity-100" 
            leave-active-class="transition ease-in duration-100" 
            leave-from-class="transform opacity-100" 
            leave-to-class="transform opacity-0"
            @before-enter="isTransitioning = true"
            @after-enter="isTransitioning = false"
            @before-leave="isTransitioning = true"
            @after-leave="isTransitioning = false">
            <div class="fixed z-50 inset-0 mt-16 w-full h-full bg-black/30 transform-gpu"
                v-if="isVisible">
                <div class="flex flex-col p-4">
                    <UISearch ref="ui_search" 
                        id="products_search"
                        class="max-w-lg mx-auto" 
                        placeholder="Pretraži..."
                        @close="close"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            id: { type: String, required: true },
            placeholder: { type: String, default: '' },
        },

        watch: {
            async isVisible(newValue, oldValue) {
                if(newValue){
                    await this.$nextTick()
                    this.$refs.ui_search?.focusInputField()
                }
            }
        },

        data() {
            return {
                isVisible: false,
                isTransitioning: false
            }
        },

        methods: {
            toggle() {
                this.isVisible = !this.isVisible
            },

            close() {
                this.isVisible = false
            },

            onKeydown(e) {
                if (!this.isVisible) return
                if (e.key === "Escape") {
                    e.preventDefault()
                    this.close()
                }
            }
        },
        
        mounted() {
            window.addEventListener("keydown", this.onKeydown)
        },

        beforeUnmount() {
            window.removeEventListener("keydown", this.onKeydown)
        }
    }

</script>
