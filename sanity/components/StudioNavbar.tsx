import { NavbarProps } from 'sanity';
import { FloatingHomeButton } from './FloatingHomeButton';

export function StudioNavbar(props: NavbarProps) {
  return (
    <>
      <FloatingHomeButton />
      <>{props.renderDefault(props)}</>
    </>
  );
}
