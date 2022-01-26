# Blade support for Prettier

This is very much a **work in progress**. Most of the code is messy and proof-of-concept.

Right now, it supports formatting Blade files as HTML, sorting Tailwind classes (if you use Tailwind) and formatting the Blade `{{ }}` syntax (adding spaces and formatting code using prettier-php).

Here are some of the things that still need to be done:

- [ ] Formatting directives
- [ ] Ensuring directives with inner content are formatted correctly
- [ ] Adding support for other `{{ }}` variants, i.e `{!!`, `{{--`.
