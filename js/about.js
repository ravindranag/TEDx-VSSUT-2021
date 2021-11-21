function splitScroll()
{
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.Xpic',
        triggerHook: 0
    })
    .setPin('.Xpic')
    /*.addIndicators()*/
    .addTo(controller);
}

splitScroll();