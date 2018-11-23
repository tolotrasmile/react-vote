import React, { useState } from 'react';
import { Spring } from 'react-spring'

function Expandable ({ children, content, contentRef }) {
  const [show, toggle] = useState(false);
  const contentHeight = (contentRef && contentRef.current && contentRef.current.offsetHeight) || 0;
  const opened = { opacity: 1, height: contentHeight };
  const closed = { opacity: 0, height: 0 };
  return (
    <Spring
      to={show ? opened : closed}>
      {props => (
        <div>
          {children && children(() => toggle(!show), show)}
          <div style={{ ...{ opacity: 0, height: 0, zIndex: 1 }, ...props }}>
            {content}
          </div>
        </div>)
      }
    </Spring>
  )
}

export default Expandable;