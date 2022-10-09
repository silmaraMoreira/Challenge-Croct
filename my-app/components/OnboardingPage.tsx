import {ReactElement} from 'react';
import {Slot} from '@croct/plug-react';

type HomeBannerContent = {
  title: string,
  subtitle: string,
  cta: {
      label: string,
      link: string,
  },
};

export default function OnboardingPage(): ReactElement {
    return (
        <Slot id="home-banner" initial={null}>
            {(props: HomeBannerContent|null) => (
                props === null
                    ? '✨ Personalizing...'
                    : (
                        <div>
                            <strong>{props.title}</strong>
                            <p>{props.subtitle}</p>
                            <a href={props.cta.link}>{props.cta.label}</a>
                        </div>
                    )
            )}
        </Slot>
    );
};