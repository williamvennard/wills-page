import React from "react"
import './App.css';
import * as d3 from "d3";

class LoadAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isPaused: true};
        this.data = [];
        this.colorPallet = ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'];
        this.colorPallets = {
            'sunset': ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
            'blues': ['#7400B8', '#6930C3', '#5E60CE', '#5390D9', '#4EA8DE', '#48BFE3', '#56CFE1', '#64DFDF', '#72EFDD', '#80FFDB'],
            'fire': ['#370617', '#6A040F', '#9D0208', '#D00000', '#DC2F02', '#E85D04', '#F48C06', '#FAA307', '#FFBA08'],
            'sunrise': ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#577590']
        }
        this.squareDim = {};
        this.numberOfDivistions = 30;
        // only for this.numberOfDivistions = 40;
        this.patterns = {
            'space_invader_40': {
                'frames':[
                    [657, 663,
                    698, 702,
                    737, 738, 739, 740, 741, 742, 743,
                    776, 777, 779, 780, 781, 783, 784,
                    815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825,
                    855, 857, 858, 859, 860, 861, 862, 863, 865,
                    895, 897, 903, 905,
                    938, 939, 941, 942],

                    [657, 663,
                    695, 698, 702, 705,
                    735, 737, 738, 739, 740, 741, 742, 743, 745,
                    775, 776, 777, 779, 780, 781, 783, 784, 785,
                    815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825,
                    856, 857, 858, 859, 860, 861, 862, 863, 864,
                    897, 903,
                    936, 944]
                ]
            },
            'space_invader_30': {
                'frames':[
                    [342, 348,
                    373, 377,
                    402, 403, 404, 405, 406, 407, 408,
                    431, 432, 434, 435, 436, 438, 439,
                    460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470,
                    490, 492, 493, 494, 495, 496, 497, 498, 500,
                    520, 522, 528, 530,
                    553, 554, 556, 557],

                    [342, 348,
                    370, 373, 377, 380,
                    400, 402, 403, 404, 405, 406, 407, 408, 410,
                    430, 431, 432, 434, 435, 436, 438, 439, 440,
                    460, 461, 462, 463, 464,465, 466, 467, 468, 469, 470,
                    491, 492, 493, 494, 495, 496, 497, 498, 499,
                    522, 528,
                    551, 559],
                ]
            }
        }


        // This binding is necessary to make `this` work in the callback
        this.passiveAnimation = this.passiveAnimation.bind(this);
    }

    componentDidMount() {
        this.startAnimation()
    }

    generateDataPoints() {
        this.data = [];
        this.squareDim.width = this.svgWidth/(this.numberOfDivistions);
        this.squareDim.height = this.svgHeight/(this.numberOfDivistions);
        // y axis
        for (let iy = 0; iy < this.numberOfDivistions; iy++) {
            // x axis
            for (let ix = 0; ix < this.numberOfDivistions; ix++) {
                let x = ix*this.squareDim.width;
                let y = iy*this.squareDim.height;
                // random first position and ordered grid as second positoin
                let square = {
                    x1: Math.floor(Math.random() * this.svgWidth),
                    y1: Math.floor(Math.random() * this.svgHeight),
                    x2: x,
                    y2: y,
                }
                this.data.push(square)
            }
        }
    }

    mouseoverAnimation(i, isRipple) {
        let random = Math.random();
        let randomColorIdx = Math.floor(Math.random() * this.colorPallet.length);
        let rect = d3.select("#rect" +i)
        rect.transition()
            .duration(500)
            .style("opacity", random)
            .attr("fill", this.colorPallet[randomColorIdx])
            .attr("x", this.data[i].x1)
            .attr("y", this.data[i].y1)
            .transition()
            .duration(1500)
            .style("opacity", 1)
            .attr("x", this.data[i].x2)
            .attr("y", this.data[i].y2)

        // create ripple effect
        if(!isRipple) {
            const radius = 1;
            let neighbors = [];
            for(let xIndex = -radius; xIndex <= radius; xIndex++) {
                let dataIdx = +i+xIndex;
                for(let yIndex = -radius; yIndex <= radius; yIndex++) {
                    dataIdx = dataIdx - (yIndex*this.numberOfDivistions)
                    // if in bounds
                    if(dataIdx >= 0 && dataIdx<this.data.length && neighbors.indexOf(dataIdx)) {
                        neighbors.push(dataIdx)
                    }
                }
            }
            let isRipple = true;
            for(let neighbor of neighbors) {
                this.mouseoverAnimation(neighbor, isRipple)
                // setTimeout(() => {  this.mouseoverAnimation(neighbor, isRipple) }, 10);
            }
        }
    }

    mouseoutAnimation(i, isRipple) {
        let random = Math.random();
        let randomColorIdx = Math.floor(Math.random() * this.colorPallet.length);
        let rect = d3.select("#rect" +i)
        rect.transition()
            .duration(1000)
            .style("opacity", 1)
            .attr("fill", this.colorPallet[randomColorIdx])
    }

    drawMosaic(pattern, frameIndex, onLoad) {
        d3.selectAll(".mosaic").remove();
        let frame = pattern.frames[frameIndex];
        let svg = d3.select('#animationSVG');
        for(let squareIdx of frame) {
            let rect = this.data[squareIdx];
            if(rect === undefined) {return}
            let random = Math.random();
            // let rect = d3.select("#rect"+squareIdx).style("opacity", 1)
            // rect.style("fill", "black")
            //     .style("opacity", 0.5)
            if(onLoad) {
                // setTimeout(() => {
                    svg.append('rect')
                        .attr('class', 'mosaic')
                        .attr("x", Math.floor(Math.random() * this.svgWidth))
                        .attr("y", Math.floor(Math.random() * this.svgHeight))
                        .attr("width", this.squareDim.width)
                        .attr("height", this.squareDim.width)
                        .attr('fill', 'black')
                        .style("opacity", 0)
                        .transition()
                        .duration(1000)
                        .attr("x", rect.x2)
                        .attr("y", rect.y2)
                        .style("opacity", 1)
                // }, 100);
            } else {
                svg.append('rect')
                    .attr('class', 'mosaic')
                    .attr("x", rect.x2)
                    .attr("y", rect.y2)
                    .attr("width", this.squareDim.width)
                    .attr("height", this.squareDim.width)
                    .attr('fill', 'black')

            }

        }
    }

    startMosaicAnimation(pattern) {
        let that = this;
        let curIndex = 0;
        function advancePatternFrame(pattern, that) {
            if (curIndex >= pattern.frames.length) {
                curIndex = 0;
            }
            that.drawMosaic(pattern, curIndex)
            ++curIndex;
        }
        let intervalID = setInterval(function(){advancePatternFrame(pattern, that)}, 1000);
    }

    moveMosaic(pattern, frameIndex) {
        // let frame = pattern.frames[frameIndex];
        // // d3.selectAll(".mosaic").remove();
        // let svg = d3.select('#animationSVG');
        // for(let squareIdx of frame) {
        //     let rectData = this.data[squareIdx];

        //     // the square indexes dont match for the frames duh
        //     let tile = d3.select("#mosaic"+squareIdx)

        //     tile.attr("x", rectData.x2)
        //         .attr("y", rectData.y2)
        //     if(frameIndex) {
        //         tile.style("opacity", 0.5)
        //     } else {
        //         tile.style("opacity", 1)
        //     }
        // }
    }

    passiveAnimation() {
        let that = this;
        for(let idx in this.data) {
            let random = Math.random();
            let rect = d3.select("#rect"+idx)
            rect.transition()
                .delay(1000*random)
                .duration(1000)
                .style("opacity", 0.8)
                .transition()
                .duration(1000)
                .style("opacity", 1)
        }
    }

    startAnimation() {
        // set random color pallet
        let colorPalletKeys = Object.keys(this.colorPallets)
        let randomColorPallet = Math.floor(Math.random() * colorPalletKeys.length);
        this.colorPallet = this.colorPallets[colorPalletKeys[randomColorPallet]];
        // setup SVG and begin drawing rectangles
        let svgDiv = document.getElementById("home-animation");
        this.svgWidth = 500;
        this.svgHeight = 500;
        let that = this;
        // create svg
        let svg = d3.select(svgDiv).append("svg")
            .attr("id", "animationSVG")
            .attr("width", this.svgWidth)
            .attr("height", this.svgHeight)



        //Container for the gradients
        var defs = svg.append("defs");

        //Filter for the outside glow
        var filter = defs.append("filter")
            .attr("id","glow");
        filter.append("feGaussianBlur")
            .attr("stdDeviation","3.5")
            .attr("result","coloredBlur");
        var feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode")
            .attr("in","coloredBlur");
        feMerge.append("feMergeNode")
            .attr("in","SourceGraphic");




        this.generateDataPoints();
        // mosaic only when grid is size 40
        // if(this.numberOfDivistions === 40) {
            let pattern = this.patterns['space_invader_' + this.numberOfDivistions];
            setTimeout(() => {
                this.drawMosaic(pattern, 0, true);
                this.startMosaicAnimation(pattern)
             }, 200);
        // }



        for(let idx in this.data) {
            setTimeout(() => {  this.drawRectangle(svg, idx) }, 10);
        }


        // // start passive animation
        // let that = this;
        // setTimeout(() => {  setInterval(that.passiveAnimation, 2500); }, 10*that.data.length);
    }

    drawRectangle(svg, idx) {
        let randomColor = Math.floor(Math.random() * this.colorPallet.length);
        let rect = this.data[idx];
        let that = this;

        svg.append("rect")
            .attr("id", "rect" + idx)
            .attr("class", "animation-rect")
            .attr("x", rect.x1)
            .attr("y", rect.y1)
            .attr("width", 1)
            .attr("height", 1)
            .attr("fill", this.colorPallet[randomColor])
            .text(idx)
            .style("opacity", 0)
            .on("mouseover", function() { that.mouseoverAnimation(idx) })
            // .on("mouseout", function() { that.mouseoutAnimation(idx) })
            .transition()
            .duration(1500)
            .attr("width", this.squareDim.width)
            .attr("height", this.squareDim.height)
            .style("opacity", 1)
            .attr("y", rect.y2)
            .attr("x", rect.x2)


    }

    render() {
        return (
            <div id="home-animation"></div>
        );
    }
}


function Home(props) {
  return (
  	<div className="container-fluid">
        <LoadAnimation/>
	    <div className="col-6 home-section">
	      <h1>William Vennard</h1>
	      <h2>Web Developer & Mechanical Engineer</h2>
	    </div>
	    <div className="contact-btn">
	    	<button className="btn btn-outline-light">Contact Me</button>
	    </div>
    </div>
  )
}

export default Home;