function figureArea(width1, height1, width2, height2) {
    function defineRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: function () {
                return this.width * this.height
            }
        };

        return rect;
    }

    let rect1 = defineRect(width1, height1);
    let rect2 = defineRect(width2, height2);
    let extraRect = defineRect(Math.min(rect1.width, rect2.width),  Math.min(rect1.height, rect2.height));

    let figureArea = rect1.area() + rect2.area() - extraRect.area();
    console.log(figureArea);
}

figureArea(2, 4, 5, 3);