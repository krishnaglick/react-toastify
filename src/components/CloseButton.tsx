import * as React from 'react';
import { DEFAULT, TypeOptions } from '../utils';

export interface CloseButtonProps {
  closeToast: (e: React.MouseEvent<HTMLElement>) => void;
  type: TypeOptions;
  ariaLabel?: string;
}

export function CloseButton({
  closeToast,
  type,
  ariaLabel = 'close'
}: CloseButtonProps) {
  return (
    <button
      className={`${DEFAULT.CSS_NAMESPACE}__close-button ${DEFAULT.CSS_NAMESPACE}__close-button--${type}`}
      type="button"
      onClick={e => {
        e.stopPropagation();
        closeToast(e);
      }}
      aria-label={ariaLabel}
    >
      <svg aria-hidden="true" viewBox="0 0 14 16">
        <path
          fillRule="evenodd"
          d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
        />
      </svg>
    </button>
  );
}
