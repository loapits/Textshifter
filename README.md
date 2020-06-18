# Textshifter <img src="https://raw.githubusercontent.com/loapits/Textshifter/master/public/favicon.png" width="30px" height="30px"/>
Project create for editing text. Changing register and literation. Have dark and light mode

### Tools:
React, Redux, TypeScript.

### Structure src folder in the project:
* [components](https://github.com/loapits/Textshifter/tree/master/src/components)   
  * [header](https://github.com/loapits/Textshifter/tree/master/src/components/header)
  * [buttons](https://github.com/loapits/Textshifter/tree/master/src/components/buttons)
  * [input](https://github.com/loapits/Textshifter/tree/master/src/components/input)
  * [footer](https://github.com/loapits/Textshifter/tree/master/src/components/footer)
* [public](https://github.com/loapits/Textshifter/tree/master/src/public)
* [state](https://github.com/loapits/Textshifter/tree/master/src/state)
* [style](https://github.com/loapits/Textshifter/tree/master/src/style)
* [tests](https://github.com/loapits/Textshifter/tree/master/src/tests)
* [interfaces](https://github.com/loapits/Textshifter/tree/master/src/interfaces)
* [types](https://github.com/loapits/Textshifter/tree/master/src/types)

_components_ - all components of application (header, buttons, input, footer).</br>
_public_ - location all the icons.</br>
_state_ - files from which the storage is collected.</br>
_style_ - storing style files.</br>
_tests_ - files, in which writed tests for application.</br>
_interfaces_ - location all the icons.</br>
_types_ - typescript types for data in application.</br>

### Functional:

**Switch theme**:</br>
If click on <img src="https://github.com/loapits/Textshifter/blob/master/src/public/sun.svg" width="14px" height="14px" /> or <img src="https://github.com/loapits/Textshifter/blob/master/src/public/moon.svg" width="14px" height="14px" /> to can switch theme.

**Download**:</br>
If click on <img src="https://github.com/loapits/Textshifter/blob/master/src/public/direct-download.svg" width="14px" height="14px" /> to can download .txt file with edited text.

**Copy to clipboard**:</br>
If click on <img src="https://github.com/loapits/Textshifter/blob/master/src/public/clipboard.svg" width="14px" height="14px" />
  to can copy the edited text to clipboard.
  
**Buttons**: 
  * _Uppercase_: Converting text to the upper register.
  * _Lowercase_: Converting text to the lower register.
  * _First title_: The first letter of the entered text converting in the upper register.
  * _Register Inversion_: Invert register of the entered text.
  * _Start an upper case_: Convert all entered letters in the upper register.
  * _As in the sentence_: Conversion first letter of every sentence in the uppercase.
  * _Eng → Ru_: If letter English converten in the Russian.
  * _Ru → Eng_: If letter Russian converten in the English.
  
  **PWA**:</br>
  Also can install a PWA.
