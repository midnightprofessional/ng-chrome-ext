module.exports = {
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./projects/ng/src/**/*.{html,ts}']
    },
    darkMode: 'class',
    theme: {
        fontFamily: {
            'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
        },
        extend: {},
    },
    variants: {},
    plugins: []
};