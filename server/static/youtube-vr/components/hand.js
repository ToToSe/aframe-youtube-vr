AFRAME.registerComponent('hand', {
    init: function() {
        this.triggerUp = this.triggerUp.bind(this);
        this.oppositeHand = (this.el.id === "avatarRight") ? this.el.parentEl.children['avatarLeft'] : this.el.parentEl.children['avatarRight'];
        this.hand = this.el;
        this.hand.addEventListener('triggerup', this.triggerUp);
    },
    triggerUp: function(e) {
        if (!this.hand.getAttribute('controller-cursor')) {
            this.hand.setAttribute('controller-cursor', 'color: red');
            this.oppositeHand.removeAttribute('controller-cursor');
        }
    }
});