import React from 'react';

import ClickableImage from 'components/clickableImage/ClickableImage.react';

export default () => (
   <div className="page project dualscape">
      <p>DUALSCAPE</p>
      <p>IN COLLABORATION WITH MASON HAYES</p>
      <p>
         SITE: ST. CROIX, VIRGIN ISLANDS
         <br />
         PROGRAM: MARINE RESEARCH CENTER
         <br />
         CAL POLY 2012
      </p>

      <ClickableImage src={ require('images/01_glazesouth.jpg') } />
      <ClickableImage src={require('images/04_hapticnorth.jpg')} />

      <p>DUALSCAPE begins with an axiom. The vacuity of the blank slate extinguishes creative thought. Progress is made by those that stand at the intersections of fields, those that are capable of merging seemingly disparate and distant details into coherent new concepts. In other words, a cluttered mind is a creative one. DUALSCAPE employs many dualities in order to achieve a desired scrappiness, eschewing the sterility and static nature of the standard lab environment in favor of a dynamic and divergent battlefield.</p>

      <ClickableImage src={require('images/dualscapeaxo.png')} />

      <p>DUALSCAPE is dualities made manifest in an architecture, an architecture that in the stretch to accommodate a multitude of functions tears at the seams, yielding unexpected spaces, systems, and solutions that enrich the disjunct whole.</p>
      <p>The rigidity of the laboratory program has been condensed to a single line, a firm incision on the estuary coast to yield a kind of hylozoic blood-letting. On the interior, this line is interrupted by expanded thresholds, where laboratories assert themselves into the public corridor, as well as by lounge niches. Together, the line allows for the occurrence of prolonged technical conversation while niches and thresholds provide for pockets of discursive interjection.</p>
      <p>The estuary side of this bar is draped in a protective algae wrap, providing solar mitigation, insulation, and a potential energy source. The water in this apparatus is recycled from the facility’s waste system. While the bar cuts into the ground to make way for a haptic shore (where scientists can dip their toes in the ocean during their breaks), the steel and glass glaze lifts off of the ground as a hybridized landscape, building, and boardwalk. The top of this glaze acts as a kind of educational meander, where visitors are free to roam from classroom to classroom, elements of the program that are submerged beneath this glaze.</p>

      <ClickableImage src={require('images/detail.jpg')} />

      <ClickableImage src={require('images/DSC_6966.jpg')} />
      <ClickableImage src={require('images/DSC_6989.jpg')} />

      <ClickableImage src={require('images/DSC_7003.jpg')} />
      <ClickableImage src={require('images/DSC_7053.jpg')} />
   </div>
);
