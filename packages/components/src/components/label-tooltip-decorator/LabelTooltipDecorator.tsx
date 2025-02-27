import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Icon from '../icon/FontIcon';
import Tooltip from '../tooltip';
import { clsx } from 'clsx';
import {
  LabelTooltipDecoratorProps,
  LabelTooltipDecoratorPropTypes,
} from './interfaces';

const LabelTooltipDecoratorHeader = styled.div`
  display: flex;
  align-items: center;
`;

const LabelTooltipDecoratorTooltip = styled.div`
  display: inline-block;
  margin-left: auto;
  font-size: 16px;
`;

const LabelTooltipDecorator: React.FC<LabelTooltipDecoratorProps> = ({
  id,
  htmlFor,
  label,
  placement,
  tooltip,
  tooltipCloseLabel,
  showRequired,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const classes = clsx('tk-label', {
    'tk-label--required': showRequired,
  });

  return label || tooltip ? (
    <LabelTooltipDecoratorHeader className="tk-input-group__header">
      {label ? (
        <label className={classes} htmlFor={htmlFor}>
          {label}
        </label>
      ) : null}
      {tooltip ? (
        <LabelTooltipDecoratorTooltip>
          <Tooltip
            id={id}
            description={tooltip}
            closeLabel={tooltipCloseLabel}
            onHintClose={() => setShowTooltip(false)}
            visible={showTooltip}
            placement={placement || 'top'}
          >
            <Icon
              className="tk-input-group__hint"
              iconName="info-round"
              onClick={() => setShowTooltip(!showTooltip)}
              onKeyDown={(event) => (event.key === 'Enter') && setShowTooltip(!showTooltip)}
              tabIndex={0}
            />
          </Tooltip>
        </LabelTooltipDecoratorTooltip>
      ) : null}
    </LabelTooltipDecoratorHeader>
  ) : null;
};

LabelTooltipDecorator.propTypes = {
  ...LabelTooltipDecoratorPropTypes,
};

export default LabelTooltipDecorator;
