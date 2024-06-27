// gsap.registerPlugin(ScrollTrigger);

// function addImageScaleAnnim(){
//     gsap.utils.toArray("section").forEach((section, index) => {
//         const image = document.querySelector(`#preview-${index + 1} img`);

//         const startCondition  = index === 0 ? "top top" : "bottom bottom";


//         gsap.to(image,{
//             scrollTrigger: {
//                 trigger : section,
//                 start: startCondition,
//                 end: ()  => {
//                     const viewportHeight = window.innerHeight;
//                     const sectionBottom = section.offsetTop + section.offsetHeight;
//                     const additionalDistance = viewportHeight * 0.5;
//                     const endValue = sectionBottom - viewportHeight + additionalDistance;
//                     return `+=${endValue}`
//                 },
//                 scrub: 1,
//             },
//             scale: 3,
//             ease: "none"
//         })

//     })
// }

// addImageScaleAnnim()

// function animClipPath(
//     sectionId,
//     previewId,
//     startClipPath,
//     endClipPath,
//     start = "top center",
//     end = "bottom top"
// ){
//     let section = document.querySelector(sectionId)
//     let preview = document.querySelector(previewId)

//     scrollTrigger.create({
//         trigger: section,
//         start: start,
//         end: end,
//         onEnter: () => {
//             gsap.to(preview, {
//                 scrollTrigger: {
//                     trigger: section,
//                     start: start,
//                     end: end,
//                     scrub: 0.125
//                 },
//                 clipPath: endClipPath,
//                 ease: "none"
//             })
//         }
//     })
// }

// animClipPath(
//     "section-1",
//     "#preview-1",
//     "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
//     "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
// )

// const totalSections = 7;

// for (let i = 5; i<= totalSections; i++){
//     let currentSection = `#section-${i}`;
//     let prevPreview = `#preview-${i -1}`;
//     let currentPreview  = `#preview-${i}`;

//     animClipPath(
//         currentSection,
//         prevPreview, 
//         "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//         "top bottom",
//         "center center"
//     )
    
//     if (i < totalSections){
//         animClipPath(
//             currentSection,
//             prevPreview, 
//             "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            
//             "center center",
//             "bottom top",
//         )
//     }

// }

gsap.registerPlugin(ScrollTrigger);

function addImageScaleAnnim(){
    gsap.utils.toArray("section").forEach((section, index) => {
        const image = document.querySelector(`#preview-${index + 1} img`);

        const startCondition  = index === 0 ? "top top" : "bottom bottom";

        gsap.to(image,{
            scrollTrigger: {
                trigger : section,
                start: startCondition,
                end: ()  => {
                    const viewportHeight = window.innerHeight;
                    const sectionBottom = section.offsetTop + section.offsetHeight;
                    const additionalDistance = viewportHeight * 0.5;
                    const endValue = sectionBottom - viewportHeight + additionalDistance;
                    return `+=${endValue}`
                },
                scrub: 1,
            },
            scale: 3,
            ease: "none"
        });
    });
}

addImageScaleAnnim();

function animClipPath(
    sectionId,
    previewId,
    startClipPath,
    endClipPath,
    start = "top center",
    end = "bottom top"
){
    let section = document.querySelector(sectionId);
    let preview = document.querySelector(previewId);

    ScrollTrigger.create({
        trigger: section,
        start: start,
        end: end,
        onEnter: () => {
            gsap.to(preview, {
                scrollTrigger: {
                    trigger: section,
                    start: start,
                    end: end,
                    scrub: 0.125
                },
                clipPath: endClipPath,
                ease: "none"
            });
        }
    });
}

animClipPath(
    "#section1",
    "#preview-1",
    "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
);

const totalSections = 7;

for (let i = 2; i <= totalSections; i++){
    let currentSection = `#section${i}`;
    let prevPreview = `#preview-${i - 1}`;
    let currentPreview  = `#preview-${i}`;

    animClipPath(
        currentSection,
        prevPreview, 
        "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        "top bottom",
        "center center"
    );
    
    if (i < totalSections){
        animClipPath(
            currentSection,
            currentPreview, 
            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            "center center",
            "bottom top"
        );
    }
}
