let tile_size = 20
let tile_x_loc = 0 - tile_size
let tile_y_loc = 0 - tile_size


function setup() {
    createCanvas(500, 500)
    strokeWeight(5)
}

function draw() {
    background(0, 255)
    for (tile_x_loc = 0 - tile_size; tile_x_loc <= width; tile_x_loc += tile_size) {
        for (tile_y_loc = 0 - tile_size; tile_y_loc <= height; tile_y_loc += tile_size) {
            maze()
            noLoop()
        }
    }
}

function maze() {
    stroke(random(0, 255), random(0, 255), random(0, 255))

    if (random(1) > 0.5) {
        line(tile_x_loc, tile_y_loc, tile_x_loc + tile_size, tile_y_loc + tile_size)

    } else {
        line(tile_x_loc, tile_y_loc + tile_size, tile_x_loc + tile_size, tile_y_loc)

    }
}