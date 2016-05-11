import React from 'react';

import ClickableImage from 'components/clickableImage/ClickableImage.react';

export default () => (
   <div className="page project 17th-street">
   <p>17TH STREET</p>
   <p>
      SITE: MANHATTAN, NEW YORK
      <br />
      PROGRAM: HOUSING
      <br />
      200,000 SQ. FT.
   </p>

   <ClickableImage src={ require('images/ntwrk07.jpg') } />

   <p>Located in Manhattan, NY, the project sits in a prominent site alongside the High Line Park in the Meatpacking district. The site is surrounded by other prominent apartment complexes, making it an ideal context for the exploration of a new form of urban housing. The High Line, through its very nature as a means of circulation, facilitates an observation over the city and its architecture from a unique perspective. The architecture takes advantage of this phenomenon, working as a spectacle to create a dialogue between its inhabitants and the passing public on multiple levels. Condensing the housing program into a slender tower allows for a larger, more expansive public condition and creates optimum scenarios for audience and interaction. The tower extends over the high line, not to exert an architectural dominance but in order to potentials for interaction within the central atrium.</p>
   <p>The project is conceived as a networked infrastructure, compromised of overlaid systems that facilitate new connections and experiences within its framework. The framework connects the highly individualized units that are unique to each inhabitant, built to their own needs within a given unit of space. By “plugging” into the system, the unit is connected to the complex as a whole, as well as outside agents of infl uence that create ever-changing environments. This system works to generate layers of networked affect, ranging from the highly personalized to larger, extreme transformations.</p>

   <ClickableImage src={ require('images/render01.jpg') } />
   <ClickableImage src={ require('images/render02.jpg') } />

   <ClickableImage src={ require('images/dwg01.png') } />
   <ClickableImage src={ require('images/dwg02.png') } />
   <ClickableImage src={ require('images/dwg03.png') } />
   </div>
);
