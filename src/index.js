import {
    ViewerApp,
    AssetManagerPlugin,
    addBasePlugins,
    CanvasSnipperPlugin,
    

    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pane } from "tweakpane";
// import{animateCounters} from "./main"
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({scroller: ".mainContainer"})

async function setupViewer(){

    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') ,
        useRgbm: false,
        isAntialiased: true,
    })


    // const data ={
    //     position:{x:0, y:0, z:0},
    //     rotation:{x:0, y:0, z:0},
    // }
    // const pane =new Pane();

    viewer.renderer.displayCanvasScaling = Math.min(window.devicePixelRatio, 1);


    const manager = await viewer.addPlugin(AssetManagerPlugin)

    await addBasePlugins(viewer)

    const importer = manager.importer
console.log("::::::::::::",importer)
    importer.addEventListener("onProgress", (ev)=> {
        const progress = ev.loaded/ev.total
        
        document.querySelector(".progress")?.setAttribute("style", `transform: scaleX(${progress})`);
    })
    importer.addEventListener("onLoad", ()=> {
        introAnimation();
    })
   

    



    await viewer.addPlugin(CanvasSnipperPlugin)

    viewer.renderer.refreshPipeline()

    const model = await manager.addFromPath("./assets/scene11.glb")
    console.log(model[0].modelObject);
    const Object3d =model[0].modelObject;
    const modelPosition = Object3d.position;
    const modelRotation = Object3d.rotation;
        

    const logo =Object3d.children[0].children[2].rotation;



    const loaderElement = document.querySelector(".loader");


    function introAnimation(){
        const t1=gsap.timeline()
        t1.to(".loader",{
            x:"150%",
            duration: 0.9,
            ease:"power4,inOut",
            delay:1,
            onComplete:setupScrollAnimtion
        }).to(".navbar",{
            display:"block",
            ease:"power4,inOut",
            delay:1,
            onComplete:setupScrollAnimtion
        })
    }

//     pane.addInput(data, "position", {
//         x: {
//             step: 0.01
//         },
//         y: {
//             step: 0.01
//         },
//         z: {
//             step: 0.01
//         },
//     });
    
//     pane.addInput(data, "rotation", {
//         x: {
//             min: -6.28319,
//             max: 6.28319,
//             step: 0.001
//         },
//         y: {
//             min: -6.28319,
//             max: 6.28319,
//             step: 0.001
//         },
//         z: {
//             min: -6.28319,
//             max: 6.28319,
//             step: 0.001
//         },
//     });
    

//   pane.on("change", (e) => {
//     if (e.presetKey === "rotation") {
//       const { x, y, z } = e.value;
//       modelRotation.set(x, y, z);
//     } else {
//       const { x, y, z } = e.value;
//       modelPosition.set(x, y, z);
//     }

//     onUpdate();
//   });
  
    function setupScrollAnimtion(){
        // console.log("introAnimation"+"sd;aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        if (loaderElement && loaderElement.parentNode === document.body) {
          document.body.removeChild(loaderElement);
        } else {
          // Handle the case where loaderElement is not a child of document.body
          console.error("loaderElement is not a child of document.body");
        }
        
        const t2 = gsap.timeline();
        t2.to(modelPosition, {
                  x: -0.00002433976656668992,
                  y: 0.04203421113128121,
                  z: -0.010092290512346577,
                  scrollTrigger: {
                    trigger: ".one",
                    start: "top top",
                    end: "top top",
                    markers: false,
                    scrub: 2,
                    immediateRender: false,
                  },
                  onUpdate,
                }),
                t2.to(logo, {
                    x: 0,
                    y: 0.6093224287033081,
                    z: 0,
                    scrollTrigger: {
                      trigger: ".one",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }),
        t2.to(logo, {
                  x: -0,
                  y: -0.6093224287033081,
                  z: -0,
                  scrollTrigger: {
                    trigger: ".second",
                    start: "top top",
                    end: "top top",
                    markers: false,
                    scrub: 2,
                    immediateRender: false,
                  },
                  onUpdate,
                }),
                t2.to(modelRotation, {
                    x: 0.374,
                    y: 0.187,
                    z: 0.640,
                    scrollTrigger: {
                      trigger: ".second",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }),
                  t2.to(modelPosition, {
                    x: -1.61,
                    y: -0.12,
                    z: -0.650,
                    scrollTrigger: {
                      trigger: ".second",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }), 
                  t2.to(modelPosition, {
                    x: -2.09,
                    y: 0.61,
                    z: -1.46,
                    scrollTrigger: {
                      trigger: ".third",
                      start: "bottom top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }), t2.to(modelRotation, {
                    x: -0.020,
                    y: 2,
                    z: 0,
                    scrollTrigger: {
                      trigger: ".third",
                      start: "bottom top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }),
                  t2.to(modelPosition, {
                    x: -1.58,
                    y: 0.39,
                    z: 0.36,
                    scrollTrigger: {
                      trigger: ".fourth",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }), t2.to(modelRotation, {
                    x: 0.317,
                    y: -3.394,
                    z: 0.100,
                    scrollTrigger: {
                      trigger: ".fourth",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }),
                  t2.to(modelPosition, {
                    x: -2.33,
                    y: 0.54,
                    z: -1.62,
                    scrollTrigger: {
                      trigger: ".fifth",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }), t2.to(modelRotation, {
                    x: -0.235,
                    y: -4.272,
                    z: 0.000,
                    scrollTrigger: {
                      trigger: ".fifth",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }),
                  t2.to(modelPosition, {
                    x: -1.83,
                    y: 0.70,
                    z: 0.00,
                    scrollTrigger: {
                      trigger: ".sixth",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  }), t2.to(modelRotation, {
                    x: -.164,
                    y: -1.954,
                    z: 0.000,
                    scrollTrigger: {
                      trigger: ".sixth",
                      start: "top top",
                      end: "top top",
                      markers: false,
                      scrub: 2,
                      immediateRender: false,
                    },
                    onUpdate,
                  })    
                  ;
              
            }
    function onUpdate(){
        viewer.setDirty();
    }
}

setupViewer()
