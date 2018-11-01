# Onpush

A quick demonstration of OnPush change detection strategy

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Why use ChangeDetectionStrategy.OnPush?

tldr; Better performance for browsers

By default, Angular change detection (known as ChangeDetectionStrategy.Default) is triggered on the following situations:

- Synchronous events (DOM events) such as click, mouse scroll, keyboard input etc.
- Asynchornous events such as HTTP callbacks, setTimeouts, promises etc.

The main issue is that Angular change detection cycle is invoked for *every Angular component present on the page*. Each cycle causes the templates to be re-evaluated, which will also trigger a DOM repaint in the browser.

This is usually not an issue on modern browsers such as Chrome. For older browsers such as IE 11, the performance penalty incurred from this behaviour is noticeably high.

In comparison to the default change detection strategy, using OnPush brings the following changes in change detection scheme:

- Just like before, synchronous events will still invoke the change detection, but only on the component that triggered the event. Note that the change detection cycle can be propagated to children.
- Change detection cycle is propagated to child components only if the bound input reference changes (immutability is the key here).
- Asynchronous events *WILL NOT* invoke the change detection. 

## Further reading

https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4