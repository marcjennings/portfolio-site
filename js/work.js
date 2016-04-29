/* work images */
var works = [
  /* infographics */
  /* first row */
    {
        title: "Infographics: Solar power poster",
        pic: "img/info/solar-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Nuclear power poster",
        pic: "img/info/nuclear-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Wind power poster",
        pic: "img/info/wind-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Fossil fuel poster",
        pic: "img/info/fossil-tmb.jpg",
        type: "infog"

  },
  /* ends first row */

  /* second row */
    {
        title: "Infographics: The Human Eye",
        pic: "img/info/eyes-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Powering society",
        pic: "img/info/powering-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Low carbon surfer",
        pic: "img/info/lcsurf-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Le Tour de France",
        pic: "img/info/tour-tmb.jpg",
        type: "infog"
  },
   /* ends second row */

  /* third row */
    {
        title: "Infographics: Online shopping",
        pic: "img/info/online-shopping-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Lifecycle of a plastic bottle",
        pic: "img/info/plastics-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Running",
        pic: "img/info/running-tmb.jpg",
        type: "infog"
  },
    {
        title: "Infographics: Rail and Roads",
        pic: "img/info/railsandroads-tmb.jpg",
        type: "infog"
  },
  /* ends third row */
  /* ends infographics */

  /* e-learning */
  /* fourth row */
    {
        title: "e-learning: Delivery methods and payments",
        pic: "img/elearn/htg-tmb.jpg",
        type: "elearn"
  },
    {
        title: "e-learning: The XY management theory",
        pic: "img/elearn/xy-tmb.jpg",
        type: "elearn"
  },
   /* ends fourth row */
   /* ends e-learning */

  /* illustration */
  /* fifth row */
    {
        title: "Illustration: Walter White",
        pic: "img/illus/walter-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: Nucky Thompson",
        pic: "img/illus/nucky-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: Charles Bradley",
        pic: "img/illus/bradley-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: Sir Bradley Wiggins",
        pic: "img/illus/wiggins-tmb.jpg",
        type: "illu"
  },
   /* ends fifth row */

  /* sixth row */
    {
        title: "Illustration: St James' Park",
        pic: "img/illus/SJP1-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: TF magazine",
        pic: "img/illus/tf-ipad-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: St James' Park",
        pic: "img/illus/SJP2-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: Hills",
        pic: "img/illus/hills-tmb.jpg",
        type: "illu"
  },
  /* ends sixth row */

  /* ends seventh row */
    {
        title: "Illustration: Buildings",
        pic: "img/illus/buildings-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: Giraffe",
        pic: "img/illus/giraffe-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: Zebra",
        pic: "img/illus/zebra-tmb.jpg",
        type: "illu"
  },
    {
        title: "Illustration: Worms",
        pic: "img/illus/worms-tmb.jpg",
        type: "illu"
  },
  /* ends seventh row */
  /* ends illustration */

  /* web-dev */
  /* eighth row */
    {
        title: "Web Development: The Reservoir Run Series",
        pic: "img/dev/res-series-tmb.jpg",
        type: "web"
  },
    {
        title: "Web Development: Coming Soon",
        pic: "img/dev/res-series-tmb.jpg",
        type: "web"
  },
    {
        title: "Web Development: Coming Soon",
        pic: "img/dev/res-series-tmb.jpg",
        type: "web"
  },
    {
        title: "Web Development: Coming Soon",
        pic: "img/dev/res-series-tmb.jpg",
        type: "web"
  }
  ];
/* ends eighth row */
/* ends web-dev */

/*var infogs = works.slice(0, 11);
var e_learn = works.slice(12, 13);
var illus = works.slice(14, 25);
var webdev = works.slice(26, 29);*/

var infogs = [];
var e_learn = [];
var illus = [];
var webdev = [];

for (var i = 0; i < works.length; ++i) {
    switch (works[i].type) {
    case "infog":
        infogs.push(works[i]);
        break;
    case "elearn":
        e_learn.push(works[i]);
        break;
    case "illu":
        illus.push(works[i]);
        break;
    case "web":
        webdev.push(works[i]);
        break;
    default:
   
    }
    
}

var multiArr = [webdev, infogs, e_learn, illus];


/* end work images */
