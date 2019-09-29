import cuid from 'cuid';
import JSPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { sections, resume } from './MockData';

const delay = (ms) => (fn, args) => setTimeout(fn, ms, args);

const delay1s = delay(1000);
const delay0s = delay(0);

// TODO: implement proper service
export const getSections = () => Promise.resolve(sections);

export const fetchResume = (rid) => (
    new Promise((resolve) => {
        const args = resume.filter(({ id }) => id === rid)[0];
        delay0s(resolve, args);
    })
);

const newResume = (res) => ({
    ...res,
    id: cuid()
});

export const saveResume = (resum) => (
    new Promise((resolve) => {
        const res = newResume(resum);
        delay1s(resolve, { status: 'success', data: { resume: res } });
        delay1s(console.log, res);
    })
);

export const deleteResume = (id) => (
    new Promise((resolve) => {
        delay1s(resolve, { status: 'success' });
        delay1s(console.log, id);
    })
);

// export const download = (camera) => (
//     new Promise((resolve) => {
//         const el = document.getElementById('main-preview');
//         html2canvas(el, { scale: 2 }).then((canvas) => {
//             debugger
//             const img = new Image();
//             img.onload = function onLoad() {
//                 debugger
//                 const data = canvas.toDataURL('image/png');
//                 const win = window.open();
//                 win.document.open();
//                 win.document.write(`<img src="${data}">`);
//                 win.document.close();
//                 delay1s(resolve, { status: 'success', data: {} });
//             };

//             img.width = camera.width;
//             img.height = camera.height;

//             const el2 = el.cloneNode(true);
//             el2.setAttribute('width', camera.width);
//             el2.setAttribute('height', camera.height);
//             img.src = `data:image/svg+xml; charset=utf8, ${encodeURIComponent(new XMLSerializer().serializeToString(el2))}`;
//             document.body.appendChild(img);
//             // delay1s(resolve, { status: 'success', data: {} });
//         });
//     })
// );


function saveAsPdf(root) {
    window.html2canvas = html2canvas;
    const doc = new JSPDF('p', 'px', [690, 1407]);
    debugger
    doc.fromHTML(root, 0, 0,
        {
            width: 690,
            height: 3000,
        },
        (pdf) => {
            pdf.save('cv-a4.pdf');
        }

    });
}


function exportImage(root) {
    html2canvas(root, { scale: 1 }).then((canvas) => {
        const img = canvas.toDataURL('image/jpeg', 1.0);
        debugger
        const doc = new JSPDF('p', 'px', [canvas.width, canvas.height]);
        // doc.scale(1, 1)
        doc.addImage(img, 'jpeg', 0, 0, canvas.width, canvas.height);
        doc.save('resume.pdf');
        // window.open(img);
    });
}

export const download = (camera) => (
    new Promise((resolve) => {
        const el = document.getElementById('main-preview');
        saveAsPdf(el);
        // exportImage(el);
        delay1s(resolve, { status: 'success', data: {} });
    })
);
