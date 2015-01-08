ig.module(
    'game.plugins.entity-mouseover'
)
.requires(
    'impact.entity'
)
.defines(function(){

ig.Entity.inject({
    mouseover: function() {
        return (
            (this.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
            ((ig.input.mouse.x + ig.game.screen.x) <= this.pos.x + this.size.x) &&
            (this.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
            ((ig.input.mouse.y + ig.game.screen.y) <= this.pos.y + this.size.y)
        );
    }
});

});