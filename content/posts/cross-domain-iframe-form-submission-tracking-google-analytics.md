---
title: "Cross Domain Iframe Form Submission Tracking Google Analytics"
date: 2020-04-19T14:57:33-05:00
tags: ["JavaScript", "Marketing"]
categories: ["How To"]
draft: false
---
***Strategies for tracking 3rd party iFrame forms with Google Analytics***
---
Measuring activity within an iFrame can be challenging if not impossible. For those responsible for digital marketing an iFrame submission might be the only way to track a goal or KPI measurement. Some iFrame implementations are easy, some are difficult, and some are just impossible.

Here is the common scenario; Your client has a landing page with a 3rd party form and wants to track engagements. If that form can be redirected to a dedicated "thank you" page, then no problem, simply include the analytics on that page. That is how Saleforce's Web to Lead works, easy enough. 

Some 3rd party forms support a JavaScript facility known as Window.postMessage(). This allows the page to talk to an iFrame only if the iFrame is willing to listen. Meaning it has been designed to communicate with its parent the status of important events such as a form submission.

If JavaScript integration is not supported then you still have one more option; listen for iFrame focus. Unfortunately this will not tell you when a form has been submitted only that it has been accessed. Not as good but, frankly you've exhausted all other options. On the bright side the data collected can affirm the landing pages design, tone, and target. Meaning if nobody is clicking on the iFrame you might need to reconsider the user experience.

![iFrame Diagram WASM GoLang](/neodigm-wasm-golang/img/browser_wasm_golang.png)

```javascript
// Fire cust GA event when any iFrame reloads
var mv_ifm = (function(_d, sQ){
    var eIF = _d.querySelectorAll( sQ );
    eIF.filter(function(e){
        e.dataset.mvSrc = e.src;
    });
    if( eIF && eIF.length >= 1){
        return {
            "init": function(){
                setTimeOut(function(){
                    mv_ifm.tick();
                }, 800);

            },
            "tick": function(){

            },
            "fire": function(){
                if(typeof gtag != "undefined"){
                    gtag("event", "interactive", { "event_category": "iframe", "event_label": "contact", "value": "submit" });
                }
            }
        }
    }
})( document, "iframe");
// TODO DOM load
// try catch
// test in ie11
```
