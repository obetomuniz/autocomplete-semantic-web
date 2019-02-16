# Semantic Web Autocomplete for [Atom Editor](https://atom.io/) [![Build Status](https://travis-ci.org/obetomuniz/autocomplete-semantic-web.svg?branch=master)](https://travis-ci.org/obetomuniz/autocomplete-semantic-web)

_This plugin supports suggestions for [Schema.org](http://schema.org/), [RDFa Lite](https://www.w3.org/TR/rdfa-lite/) and [WAI-ARIA](https://www.w3.org/WAI/intro/aria)._

![Semantic Web Autocomplete for Atom Editor](https://cloud.githubusercontent.com/assets/1680157/17541322/b0e4deba-5e94-11e6-8744-d1e938c9438f.gif)

## Install

Go to Atom > Preferences... then search for `Semantic Web Autocomplete` in Install tab. Restart atom.

## Development

```ssh
$ cd ~/.atom/packages
$ git clone https://github.com/obetomuniz/autocomplete-semantic-web.git
$ cd autocomplete-semantic-web
$ apm install
$ apm link
```

## Cheat Sheet

**Schema.org** _(with all attribute values)_

- [itemscope](http://schema.org/docs/gs.html#microdata_itemscope_itemtype)
- [itemtype](http://schema.org/docs/gs.html#microdata_itemscope_itemtype)
- [itemprop](http://schema.org/docs/gs.html#microdata_itemprop)

**RDFa Lite**

- [vocab](https://www.w3.org/TR/rdfa-lite/#vocab-typeof-and-property)
- [typeof](https://www.w3.org/TR/rdfa-lite/#vocab-typeof-and-property)
- [property](https://www.w3.org/TR/rdfa-lite/#vocab-typeof-and-property)
- [resource](https://www.w3.org/TR/rdfa-lite/#resource)
- [prefix](https://www.w3.org/TR/rdfa-lite/#prefix)

**WAI-ARIA** _(with all attribute values)_

- [role](https://www.w3.org/TR/role-attribute/)
- [aria-activedescendant](https://www.w3.org/TR/wai-aria/states_and_properties#aria-activedescendant)
- [aria-atomic](https://www.w3.org/TR/wai-aria/states_and_properties#aria-atomic)
- [aria-autocomplete](https://www.w3.org/TR/wai-aria/states_and_properties#aria-autocomplete)
- [aria-busy](https://www.w3.org/TR/wai-aria/states_and_properties#aria-busy)
- [aria-checked](https://www.w3.org/TR/wai-aria/states_and_properties#aria-checked)
- [aria-controls](https://www.w3.org/TR/wai-aria/states_and_properties#aria-controls)
- [aria-describedby](https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby)
- [aria-disabled](https://www.w3.org/TR/wai-aria/states_and_properties#aria-disabled)
- [aria-dropeffect](https://www.w3.org/TR/wai-aria/states_and_properties#aria-dropeffect)
- [aria-expanded](https://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded)
- [aria-flowto](https://www.w3.org/TR/wai-aria/states_and_properties#aria-flowto)
- [aria-grabbed](https://www.w3.org/TR/wai-aria/states_and_properties#aria-grabbed)
- [aria-haspopup](https://www.w3.org/TR/wai-aria/states_and_properties#aria-haspopup)
- [aria-hidden](https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden)
- [aria-invalid](https://www.w3.org/TR/wai-aria/states_and_properties#aria-invalid)
- [aria-label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label)
- [aria-labelledby](https://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby)
- [aria-level](https://www.w3.org/TR/wai-aria/states_and_properties#aria-level)
- [aria-live](https://www.w3.org/TR/wai-aria/states_and_properties#aria-live)
- [aria-multiline](https://www.w3.org/TR/wai-aria/states_and_properties#aria-multiline)
- [aria-multiselectable](https://www.w3.org/TR/wai-aria/states_and_properties#aria-multiselectable)
- [aria-orientation](https://www.w3.org/TR/wai-aria/states_and_properties#aria-orientation)
- [aria-owns](https://www.w3.org/TR/wai-aria/states_and_properties#aria-owns)
- [aria-posinset](https://www.w3.org/TR/wai-aria/states_and_properties#aria-posinset)
- [aria-pressed](https://www.w3.org/TR/wai-aria/states_and_properties#aria-pressed)
- [aria-readonly](https://www.w3.org/TR/wai-aria/states_and_properties#aria-readonly)
- [aria-relevant](https://www.w3.org/TR/wai-aria/states_and_properties#aria-relevant)
- [aria-required](https://www.w3.org/TR/wai-aria/states_and_properties#aria-required)
- [aria-selected](https://www.w3.org/TR/wai-aria/states_and_properties#aria-selected)
- [aria-setsize](https://www.w3.org/TR/wai-aria/states_and_properties#aria-setsize)
- [aria-sort](https://www.w3.org/TR/wai-aria/states_and_properties#aria-sort)
- [aria-valuemax](https://www.w3.org/TR/wai-aria/states_and_properties#aria-valuemax)
- [aria-valuemin](https://www.w3.org/TR/wai-aria/states_and_properties#aria-valuemin)
- [aria-valuenow](https://www.w3.org/TR/wai-aria/states_and_properties#aria-valuenow)
- [aria-valuetext](https://www.w3.org/TR/wai-aria/states_and_properties#aria-valuetext)

## License

[The MIT License (MIT)](https://betomuniz.mit-license.org/)

Copyright (c) 2016 Beto Muniz (http://betomuniz.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
