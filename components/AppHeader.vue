<template>
  <div>
    <!-- Top bar -->
    <div class="relative isolate overflow-hidden bg-gray-100 px-6 py-2.5 sm:px-3.5">
      <div class="flex flex-1 justify-end mx-auto max-w-7xl space-x-6">
        <a class="flex items-center justify-center text-xs leading-6 font-semibold text-gray-900 hover:text-blue-500"
          href="/login">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Log In</a>
        <a class="flex items-center justify-center text-xs leading-6 font-semibold text-gray-900 hover:text-blue-500"
          href="https://devcenter.avrintech.net">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          DevCenter</a>
        <a class="flex items-center justify-center text-xs leading-6 font-semibold text-gray-900 hover:text-blue-500"
          href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          Live Chat</a>
        <a class="flex items-center justify-center text-xs leading-6 font-semibold text-gray-900 hover:text-blue-500"
          href="tel:19738218900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          + 1 (973) 821-8900</a>
      </div>
    </div>
    <!-- Navbar -->
    <nav class="shadow-md p-6 lg:px-8 z-40">
      <div class="flex items-center justify-between max-w-7xl mx-auto">
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Avrin Technologies</span>
            <img class="h-8 w-auto" src="~/assets/img/logo-notypeface_black.png" alt="" />
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <PopoverButton href="#"
              class="flex items-center gap-x-1 font-semibold leading-6 text-gray-900 hover:text-blue-500"
              aria-expanded="false">
              <span>Hosting</span>
              <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
            </PopoverButton>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div
                  class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div class="p-4">
                    <div v-for="item in solutions" :key="item.name"
                      class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                      <div
                        class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-blue-600"
                          aria-hidden="true" />
                      </div>
                      <div>
                        <a :href="item.href" class="font-semibold text-gray-900">
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </a>
                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a href="#"
            class="flex items-center gap-x-1 justify-center font-semibold leading-6 text-gray-900 hover:text-blue-500">
            VPS
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#"
            class="flex items-center gap-x-1 justify-center font-semibold leading-6 text-gray-900 hover:text-blue-500">
            Dedicated
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="font-semibold leading-6 text-gray-900 hover:text-blue-500">
            Enterprise Solutions
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {
  ServerStackIcon,
  CursorArrowRaysIcon,
  AtSymbolIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'

const solutions = [


  { name: 'Shared Hosting', description: 'Cost-effective hosting without compromising on performance', href: '/hosting/shared', icon: ServerStackIcon },
  { name: 'WordPress Hosting', description: 'You take care of your WordPress site and we\'ll take care of the rest', href: '/hosting/wordpress', icon: CursorArrowRaysIcon },
  { name: 'Email Services', description: "Empower your business with Hosted Exchange Email", href: '/hosting/email', icon: AtSymbolIcon },
  { name: 'Domain Services', description: 'Establish your online presence with a domain', href: '/hosting/domain', icon: GlobeAltIcon },
]
</script>