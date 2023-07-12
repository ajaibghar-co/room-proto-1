fetch("timeline.json")
  .then((response) => response.json())
  .then((json) => {
    const arr = json.timeline;
    arr.forEach((element) => {
      let year = element.year;
      let ev = element.event;
      let highlight = element.highlight;

      if (highlight == "true") {
        const d = document.createElement("div");
        d.classList.add("timeline-item");

        const dot = document.createElement("div");
        dot.classList.add("timeline-dot");

        const para = document.createElement("p");
        const node = document.createTextNode(year);
        para.classList.add("timeline-date");
        para.appendChild(node);

        const para2 = document.createElement("p");
        const node2 = document.createTextNode(ev);
        para2.classList.add("timeline-content");
        para2.appendChild(node2);

        const el = document.getElementById("timeline-section");
        d.appendChild(para);
        d.appendChild(para2);
        d.appendChild(dot);

        el.appendChild(d);
      } else {
        const d = document.createElement("div");
        d.classList.add("timeline-item-false");

        const para2 = document.createElement("p");
        const node2 = document.createTextNode("[" + year + "] " + ev);
        para2.classList.add("timeline-content-false");
        para2.appendChild(node2);

        const el = document.getElementById("timeline-section");
        // d.appendChild(para);
        d.appendChild(para2);
        // d.appendChild(dot);

        el.appendChild(d);
      }
    });
  });
