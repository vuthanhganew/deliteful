---
layout: default
title: deliteful/ToggleButton
---

# deliteful/ToggleButton

The `deliteful/ToggleButton` widget represents a form-aware 2-states (pressed or unpressed) button with optional icons
and labels for each state. It is a subclass of the `deliteful/Button` class.

*Example*

![ToggleButton (Bootstrap)](images/ToggleButton1.png)

##### Table of Contents
[Element Instantiation](#instantiation)  
[Element Configuration](#configuration)  
[Element Styling](#styling)  
[Element Events](#events)  
[Enterprise Use](#enterprise)  
[See also](#seealso)

<a name="instantiation"></a>
## Element Instantiation

See [`delite/Widget`](/delite/docs/master/Widget.md) for full details on how instantiation lifecycle is working.

### Declarative Instantiation

```html
<html>
  <button is="d-toggle-button" checked="true" checkedLabel="On" checkedIconClass="iconButtonPressed">Off</button>
  <button is="d-toggle-button" checked="true">WiFi</button>
</html>
```

### Programmatic Instantiation

```js
  require([
    "delite/register",
    "deliteful/ToggleButton"
  ], function (register, ToggleButton) {
     register.parse();

     var tb = new ToggleButton({
         checked: true,
         checkedLabel: "On",
         checkedIconClass: "iconButtonPressed",
         label: "Off"
     });
     tb.placeAt(document.body);
     tb.startup();
     tb = new ToggleButton({checked: true, label: "WiFi"});
     tb.placeAt(document.body);
     tb.startup();
});
```

<a name="configuration"></a>
## Element Configuration

The state of a ToggleButton widget (checked or unchecked) is defined by the `checked` property, inherited from the 
`deliteful/Toggle` class.

By default, the label of the button is specified in markup as a child of the button element, or via the `label`
property, inherited from the `deliteful/Button` class. In addition to this label, an optional label can be defined for
the checked state via the `checkedLabel` property.

An optional icon can be specified via the `iconClass` property which takes a css class, inherited from the
`deliteful/Button` class. In addition to this icon, an optional icon can be defined for the checked state via the
`checkedIconClass` property.

<a name="styling"></a>
## Element Styling

### Supported themes

This widget provides default styling for the following delite themes:

* bootstrap

### CSS Classes

CSS classes are bound to the structure of the widget declared in its template `deliteful/ToggleButton/ToggleButton.html`.
The following table lists all the CSS classes that can be used to style the toggle button. 

|class name/selector|applies to|
|----------|----------|
|d-toggle-button|ToggleButton widget node

In addition, the following classes are used in combination with the classes above:

|class name/selector|applies to|
|----------|----------|
|d-checked|CheckBox and checkmark nodes in checked state

<a name="events"></a>
## Element Events
The widget `deliteful/ToggleButton` provides a `change` event when its state is changed following a user interaction.

|event name|dispatched|cancelable|bubbles|properties|
|----------|----------|----------|-------|----------|
|change|on state change|No |Yes|standard HTML5 Event properties|

<a name="enterprise"></a>
## Enterprise Use
### Accessibility
|type|status|comment|
|----|------|-------|
|Keyboard|N/A|No user interaction|
|Visual Formatting|ok|Support high contrast on Firefox and Internet Explorer desktop browsers.|
|Screen Reader|yes|Tested with JAWS and VoiceOver|

### Browser Support
This widget supports all supported browsers without any degraded behavior.

<a name="seealso"></a>
## See also
### Samples
- deliteful/samples/Buttons.html
