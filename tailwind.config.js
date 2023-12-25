module.exports = {
    plugins: [
        require('@tailwindcss/forms'),
        require('preline/plugin'),
    ],

    darkMode: 'class',

    content: ['node_modules/preline/dist/*.js',],
}