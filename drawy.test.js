/**
 * DRAWY.JS, Is Open Source Technology.
 * this is a drawy library.
 * for more information, or of you want to become supporter,
 *  for developement drawy please contact a.m.k-it@hotmail.com
 * this document represent new version from features added to library under to test.
 */

/**
 * DRAWY INFORAMTION
 */
const VERSION = "1.0.0";
const SUPPORT = "JAVASCRIPT, JS, API, JSON, XML";

/**
 * Default setting
 */

const DRAWY_WIDTH = "600";
const DRAWY_HEIGHT = "600";
const DARK_THEME = "dark" || "DARK" || "Dark";
const LIGHT_THEME = "light" || "LIGHT" || "Light";
const BLUY_THEME = "bluy" || "BLUY" || "Bluy";
const DEFAULT_THEME = LIGHT_THEME;
const DRAWY_KEY = "DRAWY_CANVAS";
const DRAWY_CONTAINER = document.createElement("canvas");
/**
 * define default coordinitor for site
 */
const START_POINT_X = 50;
const START_POINT_Y = 50;
const DISTANCE = 100; // we will use this distance between each to shape in canvas
const CSS_COLOR_NAMES = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "Darkorange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen"
];

/**
 *
 * Exception/Error Section
 */
const NOT_DEFINE_EXCEPTION =
  "NO_ELEMENT_DEFINE ERROR: {no element define for DRAWY, check from element definition}";
const INVALID_ELEMENT_EXCEPTION =
  "INVALID_ELEMENT ERROR: { invalid element to create DRAWY, please define DIV element then define drawy.}";
const INVALID_TEMPLATE_EXCEPTION =
  "INVALID_TEMPLATE ERROR: {invalid template object for draw, typeof template should be  json object }";
const EMPTY_TEMPLATE_EXCEPTION =
  "TEMPLATE EMPEY ERROR: {the template should not be empty for draw, redefine a template with not empty object}";
const NETWORK_ELEMENT_ID_EXCEPTION =
  "NETWORK_ELEMENT ERROR : {some network elements has undefined in template or defined with missing [id/ID] attribute, please use [id/ID] attribute to define element correctly}";
/**
 *
 * @param {element will handle the drawy container} elem
 * @param {option will setup the drawy} options
 */

var NET_ELEMENT = [];
var NET_LINK = [];
var NET_BTS = [];
var NET_ANTENNA = [];

var Drawy = function(elem = "", options = {}) {
  if (typeof elem == "string") {
    this.elem = elem;
    /**
     * Get The Element has define in html file to render drawy.
     */
    this._drawElem = document.getElementById(this.elem);
    /**
     * Check if the element is definition
     */
    if (this._drawElem != null) {
      /**
       * check if element equal div is support the drawy or not.
       */
      if (
        this._drawElem.nodeName != "<div>" &&
        this._drawElem.nodeName != "DIV"
      ) {
        throw INVALID_ELEMENT_EXCEPTION;
      } else {
        /**
         * drawy has define correctly
         */
        if (options != (Object.length == 0)) {
          this.width = options.width || DRAWY_WIDTH;
          this.height = options.height || DRAWY_HEIGHT;
          this.theme = options.theme || DEFAULT_THEME;
          this.link = options.link || options.LINK;
          this.dataType = options.dataType || "JSON";
          /**
           * check if user define valid template as json.
           */ if (typeof options.template != "object") {
            throw INVALID_TEMPLATE_EXCEPTION;
          } else {
            /**
             * check if json template object length > 0
             */

            if (JSON.stringify(options.template) === JSON.stringify({})) {
              throw EMPTY_TEMPLATE_EXCEPTION;
            } else {
              this.template = options.template;
            }
          }
          Drawy.prototype.setOptions(options);
        }
      }
    } else {
      throw NOT_DEFINE_EXCEPTION;
    }
  }
};

/**
 * drawy prototype.
 */
Drawy.prototype = {
  setOptions: function(opt = {}) {
    if (opt) {
      // set width for canvas

      if (typeof width !== "string") {
        throw "INVALID_WIDTH_TYPE ERROR: {width should be a string}";
      } else {
        DRAWY_CONTAINER.width = width;
      }

      //set height for canvas

      if (typeof height !== "string") {
        throw "INVALID_HEIGH_TYPE ERROR : {height shold be a string} ";
      } else {
        DRAWY_CONTAINER.height = height;
      }

      if (opt.template) {
        this.createContainer();
        this.anaylizeTemplate(opt.template);
      }
      if (theme) {
        DRAWY_CONTAINER.setAttribute("class", theme);
      }
    }
  },
  createContainer: function() {
    DRAWY_CONTAINER.setAttribute("id", DRAWY_KEY);

    _drawElem.appendChild(DRAWY_CONTAINER);
  },
  createContext: function() {
    if (DRAWY_CONTAINER.getContext) {
      var context = DRAWY_CONTAINER.getContext("2d");
      return context;
    }
  },
  anaylizeTemplate: function(drtemplate) {
    //console.log(drtemplate);
    let tmp_arr = Object.keys(drtemplate); // template array
    var curr_x = START_POINT_X; // define a variable for handle change move x coordinitor on x axis
    var curr_y = START_POINT_Y; // define a variable for handle change move y coordinitor on y axis
    for (i = 0; i < tmp_arr.length; i++) {
      //console.log(curr_x + "|" + curr_y);
      /* if (i === 0)
        // for first element using the start point coordinitor .
        this.getElementRender(tmp_arr[i], START_POINT_X, START_POINT_Y);*/
      var curr_elem = Object.keys(drtemplate[i]);

      this.getElementRender(
        curr_elem[0],
        curr_x,
        curr_y,
        drtemplate[i][curr_elem[0]]["name"]
      );
      // this.createCable(
      //   this.createContext(),
      //   curr_x,
      //   curr_y,
      //   6,
      //   curr_x + DISTANCE,
      //   curr_elem[0]
      // );
      /**
       * get network element id
       */
      var net_elem_id =
        drtemplate[i][curr_elem[0]]["id"] || drtemplate[i][curr_elem[0]]["ID"];

      if (net_elem_id === undefined) {
        throw NETWORK_ELEMENT_ID_EXCEPTION;
      } else {
        NET_ELEMENT.push({ id: net_elem_id, x: curr_x, y: curr_y });
      }
      curr_x += DISTANCE;
      if (curr_x > DRAWY_CONTAINER.width - 100) {
        /* this.createCable(
          this.createContext(),
          curr_x - DISTANCE,
          curr_y,
          curr_y,
          START_POINT_X,
          curr_elem[0]
        );*/
        curr_x = START_POINT_X;
        curr_y += DISTANCE;
      }
      //curr_y += DISTANCE;
    }
    this.analizeLink();
  },
  analizeLink: function() {
    /**
     * analize link to create cable
     */
    var index = 0;
    link.forEach(el => {
      this.getCableRender(el["from"], el["to"], index);
      index++;
    });
  },
  getElementRender: function(elem, x, y, name) {
    switch (elem) {
      case "BTS":
        this.createBTS(this.createContext(), x, y, name);
        break;
      case "SWITCH":
        this.createSwitch(this.createContext(), x, y, name);
        break;
      case "Antenna" || "ANTENNA" || "antenna":
        this.createAntenna(this.createContext(), x, y, name);
        break;
      default:
        break;
    }
  },
  getCableRender: function(idfrom, idto, i) {
    /**
     * this function will render cable after analyize link array.
     */
    var fx = null,
      fy = null,
      tx = null,
      ty = null;

    for (var index = 0; index < NET_ELEMENT.length; index++) {
      if (NET_ELEMENT[index]["id"] == idfrom) {
        fx = NET_ELEMENT[index]["x"];
        fy = NET_ELEMENT[index]["y"];
      }

      if (NET_ELEMENT[index]["id"] == idto) {
        tx = NET_ELEMENT[index]["x"];
        ty = NET_ELEMENT[index]["y"];
      }
    }
    if (fx != null && fy != null && tx != null && ty != null) {
      this.createCableCore(this.createContext(), fx, fy, tx, ty, i);
    }
  },
  createBTS: function(context, x, y, btsname) {
    /* context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 10, y + 50);
    context.shadowColor = "black";
    context.shadowBlur = 6;
    context.shadowOffsetX = 6;
    context.shadowOffsetY = 6;
    context.strokeStyle = "rgb(211, 78, 78)";
    context.fill();
    context.stroke();

    context.moveTo(x, y);
    context.lineTo(x - 15, x + 50);
    context.fill();
    context.stroke();

    context.moveTo(x, y);
    context.lineTo(x, y + 50);
    context.fill();
    context.stroke();

    context.moveTo(x + 5, x + 20);
    context.lineTo(x - 5, x + 20);
    context.fill();
    context.stroke();

    context.moveTo(x + 10, x + 35);
    context.lineTo(x - 10, x + 35);
    context.fill();
    context.stroke();

    context.closePath();*/
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 15, y + 50);
    context.shadowColor = "black";
    context.shadowBlur = 4;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.lineWidth = 1;
    context.strokeStyle = "rgb(211, 78, 78)";
    context.fill();
    context.stroke();

    context.moveTo(x, y);
    context.lineTo(x - 15, y + 50);
    context.fill();
    context.stroke();

    context.moveTo(x, y);
    context.lineTo(x, y + 50);
    context.fill();
    context.stroke();

    context.moveTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();
    context.stroke();

    context.moveTo(x + 10, y + 35);
    context.lineTo(x - 10, y + 35);
    context.fill();
    context.strokeText(btsname, x - 15, y + 60);
    context.stroke();

    context.closePath();
  },
  createSwitch: function(ctx, x, y, switchName) {
    /* context.fillStyle = "rgb(12, 121, 35)";
    context.fillRect(10, 40, 70, 80);*/ //x =50, y =50
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgb(112,215,121)";
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y);
    ctx.lineTo(x + 30, y + 50);
    ctx.lineTo(x, y + 50);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.moveTo(x, y + 25);
    ctx.lineTo(x + 30, y + 25);
    ctx.stroke();

    ctx.moveTo(x, y + 50);
    ctx.lineTo(x + 30, y + 50);
    ctx.strokeText(switchName, x, y + 60);
    ctx.stroke();
    ctx.closePath();
  },
  createAntenna: function(context, x, y, antennaName) {
    context.beginPath();
    context.lineJoin = "round";
    context.moveTo(x, y);
    context.lineTo(x + 50, y);
    context.moveTo(x + 25, y);
    context.lineTo(x + 25, y + 50);
    context.strokeStyle = "white";
    context.lineWidth = 4;
    context.stroke();
    context.closePath();
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + 15);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(x + 10, y);
    context.lineTo(x + 10, y + 10);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(x + 40, y);
    context.lineTo(x + 40, y + 10);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(x + 50, y);
    context.lineTo(x + 50, y + 15);
    context.stroke();
    context.strokeText(antennaName, x + 20, y + 60);
    context.closePath();
  },
  /**
   * create cable to link each to shape togather
   * @param { canvas context will handle shape object} context
   * @param { coordinitor x will render on x axis in page canvas} x
   * @param { coordinitor y will render on y axis in page canvas} y
   * @param { hight of cable } h
   * @param { length of cable } l
   * @param {previous name will link to get coordinitor} prv_elem_name
   */
  createCable: function(context, x, y, h, l, prv_elem_name) {
    switch (prv_elem_name) {
      case "BTS":
        context.beginPath();
        context.moveTo(x, y + 50);
        context.lineTo(x, y + h + 50);
        context.lineTo(l, y + h + 50);
        context.strokeStyle = "rgb(80, 180,220)";
        context.stroke();
        break;
    }
  },
  /**
   *
   * @param {2d context for render cable in canvas} context
   * @param {from x point coordinitor on x axis} fx
   * @param {from y point coordinitor on y axis} fy
   * @param {to x point coordinitor on x axis} tx
   * @param {to y point coordinitor on y axis} ty
   * @param {percent of increase on height to up table} prc
   */
  createCableCore: function(context, fx, fy, tx, ty, prc) {
    var h = 10 + prc * 3;
    context.beginPath();
    context.strokeStyle = CSS_COLOR_NAMES[prc + 1];
    context.moveTo(fx, fy);
    context.lineTo(fx, fy - h);
    context.lineTo(tx, ty - h);
    context.stroke();
    context.lineTo(tx, ty);
    context.strokeStyle = CSS_COLOR_NAMES[prc + 2];
    context.stroke();
    context.closePath();
  }
};
