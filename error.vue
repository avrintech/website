<template>
  <div>
    <NuxtLayout name="default">
      <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col px-6 lg:px-8">
        <div class="my-auto flex-shrink-0 py-16 sm:py-32 text-center">
          <p class="text-base font-semibold text-blue-600">404</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p class="mt-2 text-base text-gray-500">Sorry, the page you are looking for could not be found.</p>
          <div class="mt-6">
            <a href="#" class="text-base font-semibold text-blue-600 hover:text-blue-500">
              Go back
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>