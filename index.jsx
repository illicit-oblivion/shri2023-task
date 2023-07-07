import './styles.css';
import './reset.css';
import React, {createContext, forwardRef, useContext, useEffect, useLayoutEffect, useState} from "react";
import {createRoot} from "react-dom";
import Logo from './assets/logo.svg';
import ScheduleIcon from './assets/icon_scheduled.svg';
import CloudDrizzle from './assets/cloud-drizzle.svg';
import ListIcon from './assets/icon_list.svg';
import { FixedSizeList } from 'react-window';

function Header() {
    let [expanded, setExpanded] = React.useState(false);
    let [toggled, setToggled] = React.useState(false);

    const onClick = () => {
        if (!toggled) {
            setToggled(true);
        }

        setExpanded(!expanded);
    };

    return <header className="header">
        <a href="/" className="header__logo" aria-label="Яндекс.Дом">
            <Logo className={'header__logo-icon'} />
        </a>
        <button className="header__menu" aria-expanded={expanded ? 'true' : 'false'} onClick={onClick}>
            <ListIcon/>
                <span className="header__menu-text a11y-hidden">
                    {expanded ? 'Закрыть меню' : 'Открыть меню'}
                </span>
        </button>
        <ul className={'header__links' + (expanded ? ' header__links_opened' : '') + (toggled ? ' header__links-toggled' : '')}>
            <li className="header__item">
                <a className="header__link header__link_current" href="/" aria-current="page">Сводка</a>
            </li>
            <li className="header__item">
                <a className="header__link" href="/devices">Устройства</a>
            </li>
            <li className="header__item">
                <a className="header__link" href="/scripts">Сценарии</a>
            </li>
        </ul>
    </header>;
}

function SunIcon(props) {
    return <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>icon_sun</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Final" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="v1-2-1-home-dashboard" transform="translate(-464.000000, -404.000000)">
                <g id="status" transform="translate(39.000000, 195.000000)">
                    <g id="Group" transform="translate(1.000000, 40.000000)">
                        <g id="Widget-Copy" transform="translate(410.000000, 155.000000)">
                            <g id="icon" transform="translate(14.000000, 14.000000)">
                                <g id="sun" transform="translate(1.000000, 1.000000)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <circle id="Oval" strokeOpacity={props.circleOpacity} stroke={props.circleColor} cx="11" cy="11" r="5"></circle>
                                    <path d="M11,0 L11,2" id="Shape" strokeOpacity={props.raysOpacity} stroke={props.raysColor}></path>
                                    <path d="M11,20 L11,22" id="Shape" strokeOpacity={props.raysOpacity} stroke={props.raysColor}></path>
                                    <path d="M3.22,3.22 L4.64,4.64" id="Shape" strokeOpacity={props.raysOpacity} stroke={props.raysColor}></path>
                                    <path d="M17.36,17.36 L18.78,18.78" id="Shape" strokeOpacity={props.raysOpacity} stroke={props.raysColor}></path>
                                    <path d="M0,11 L2,11" id="Shape" strokeOpacity={props.raysOpacity} stroke={props.raysColor}></path>
                                    <path d="M20,11 L22,11" id="Shape" strokeOpacity={props.raysOpacity} stroke={props.raysColor}></path>
                                    <path d="M3.22,18.78 L4.64,17.36" id="Shape" strokeOpacity={props.raysOpacity} stroke={props.raysColor}></path>
                                    <path d="M17.36,4.64 L18.78,3.22" id="Shape" strokeOpacity={props.raysOpacity} stroke={props.raysColor}></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>;
}

function TemperatureIcon(props) {
    return <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>icon_temperature</title>
        <desc>Created with Sketch.</desc>
        <g id="Final" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="v1-2-1-home-dashboard" transform="translate(-464.000000, -269.000000)">
                <g id="status" transform="translate(39.000000, 195.000000)">
                    <g id="Group" transform="translate(1.000000, 40.000000)">
                        <g id="Widget" transform="translate(410.000000, 20.000000)">
                            <g id="icon_temperature" transform="translate(14.000000, 14.000000)">
                                <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                <path d="M14.0003489,14.76 L14.0003489,3.5 C14.0003489,2.11928813 12.8810608,1 11.5003489,1 C10.119637,1 9.00034891,2.11928813 9.00034891,3.5 L9.00034891,14.76 C7.35223452,15.8611927 6.61873572,17.911099 7.19410587,19.8079004 C7.76947602,21.7047019 9.51820196,23.0016574 11.5003489,23.0016574 C13.4824959,23.0016574 15.2312218,21.7047019 15.806592,19.8079004 C16.3819621,17.911099 15.6484633,15.8611927 14.0003489,14.76 Z" id="Shape" stroke={props.shapeColor} strokeOpacity={props.shapeOpacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle id="Oval-2" fill={props.circleColor} fillOpacity={props.circleOpacity} fillRule="nonzero" cx="11.5" cy="18.5" r="3.5"></circle>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>;
}

function Event(props) {
    const ref = React.useRef();

    const { onSize } = props;

    React.useEffect(() => {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        if (onSize) {
            onSize({ width, height });
        }
    });

    let icon;
    switch (props.icon) {
        case 'temp' : {
            icon = <TemperatureIcon shapeOpacity={0.4} circleOpacity={0.1} circleColor={'#333333'} shapeColor={'#333333'} />;
            break;
        }
        case 'temp2' : {
            icon = <TemperatureIcon circleOpacity={1} shapeOpacity={1} circleColor={'#FFD93E'} shapeColor={'#F5A623'} />;
            break;
        }
        case 'light' : {
            icon = <SunIcon circleOpacity={0.4} raysOpacity={0.1} circleColor={'#333333'} raysColor={'#333333'} />;
            break;
        }
        case 'light2' : {
            icon = <SunIcon circleOpacity={1} raysOpacity={1} circleColor={'#F5A623'} raysColor={'#FFD93E'}  />;
            break;
        }
        case 'schedule' : {
            icon = <ScheduleIcon color={"#333333"} />;
            break;
        }
    }

    return <div ref={ref} className={'event' + (props.slim ? ' event_slim' : '')} style={props.style}>
        <button className="event__button">
            <span className={'event__icon'} role={'img'}>{icon}</span>
            <h4 className="event__title">{props.title}</h4>
            {props.subtitle &&
                <span className="event__subtitle">{props.subtitle}</span>
            }
        </button>
    </div>;
}

const TABS = {
    all: {
        title: 'Все',
        items: [{
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Yeelight LED Smart Bulb',
            subtitle: 'Включено'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'D-Link Omna 180 Cam',
            subtitle: 'Включится в 17:00'
        }, {
            icon: 'temp',
            iconLabel: 'Температура',
            title: 'Elgato Eve Degree Connected',
            subtitle: 'Выключено до 17:00'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'LIFX Mini Day & Dusk A60 E27',
            subtitle: 'Включится в 17:00'
        }, {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Включено'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Philips Zhirui',
            subtitle: 'Включено'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Philips Zhirui',
            subtitle: 'Включено'
        }, {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Включено'
        }]
    },
    kitchen: {
        title: 'Кухня',
        items: [{
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Yeelight LED Smart Bulb',
            subtitle: 'Включено'
        }, {
            icon: 'temp',
            iconLabel: 'Температура',
            title: 'Elgato Eve Degree Connected',
            subtitle: 'Выключено до 17:00'
        }]
    },
    hall: {
        title: 'Зал',
        items: [{
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Philips Zhirui',
            subtitle: 'Выключено'
        }, {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Выключено'
        }]
    },
    lights: {
        title: 'Лампочки',
        items: [{
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'D-Link Omna 180 Cam',
            subtitle: 'Включится в 17:00'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'LIFX Mini Day & Dusk A60 E27',
            subtitle: 'Включится в 17:00'
        }, {
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Включено'
        }, {
            icon: 'light',
            iconLabel: 'Освещение',
            title: 'Philips Zhirui',
            subtitle: 'Включено'
        }]
    },
    cameras: {
        title: 'Камеры',
        items: [{
            icon: 'light2',
            iconLabel: 'Освещение',
            title: 'Xiaomi Mi Air Purifier 2S',
            subtitle: 'Включено'
        }]
    }
};
for (let i = 0; i < 6; ++i) {
    TABS.all.items = [...TABS.all.items, ...TABS.all.items];
}
const TABS_KEYS = Object.keys(TABS);

const padding = 7.5;
const elementWidth = 200;

const EventContainer = ({ data, index, style }) => {
    return <li className="list_item" style={style}>
        <Event {...data[index]}  />
    </li>;
}

const Outer = forwardRef(({style, children, className, onScroll}, ref) => {
    const classes = className.split(' ').filter(Boolean);
    const tab = classes.shift();
    const activeTab = classes.shift();
    return <div
        role="tabpanel"
        className={classes.join(' ')}
        aria-hidden={tab === activeTab ? 'false' : 'true'}
        id={`panel_${tab}`} aria-labelledby={`tab_${tab}`}
        // style={{overflow: 'hidden'}}
        ref={ref}
        onScroll={onScroll}
        style={style}>
        {children}
    </div>
});

const Track = forwardRef(({style, children}, ref) => {
    return <ul className="section__panel-list" ref={ref} style={style}>{children}</ul>
});

function Main() {
    const ref = React.useRef();
    const initedRef = React.useRef(false);
    const [activeTab, setActiveTab] = React.useState('all');
    const [hasRightScroll, setHasRightScroll] = React.useState(false);

    React.useEffect(() => {
        if (!activeTab && !initedRef.current) {
            initedRef.current = true;
            setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
        }
    });

    const onSelectInput = event => {
        setActiveTab(event.target.value);
    };

    let sizes = [];
    const onSize = size => {
        sizes = [...sizes, size];
    };

    React.useEffect(() => {
        const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0);

        const newHasRightScroll = sumWidth > ref.current.offsetWidth;
        if (newHasRightScroll !== hasRightScroll) {
            setHasRightScroll(newHasRightScroll);
        }
    });

    const onArrowCLick = () => {
        const scroller = ref.current.querySelector('.section__panel:not(.section__panel_hidden) .section__panel-list');
        if (scroller) {
            scroller.scrollTo({
                left: scroller.scrollLeft + 400,
                behavior: 'smooth'
            });
        }
    };

    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const element = ref?.current;

        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            setWidth(entries[0].contentRect.width);
        });

        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    }, [])

    return <main className="main">
        <section className="section main__general">
            <h2 className="section__title section__title-header section__main-title">Главное</h2>
            <div className="hero-dashboard">
                <div className="hero-dashboard__primary">
                    <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
                    <p className="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
                    <ul className="hero-dashboard__info">
                        <li className="hero-dashboard__item">
                            <div className="hero-dashboard__item-title">Дома</div>
                            <div className="hero-dashboard__item-details">
                                +23
                                <span className="a11y-hidden">°</span>
                            </div>
                        </li>
                        <li className="hero-dashboard__item">
                            <div className="hero-dashboard__item-title">За окном</div>
                            <div className="hero-dashboard__item-details">
                                +19
                                <span className="a11y-hidden">°</span>

                                <CloudDrizzle className={'hero-dashboard__icon hero-dashboard__item-icon'}/>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className="hero-dashboard__schedule">
                    <Event
                        icon="temp"
                        iconLabel="Температура"
                        title="Philips Cooler"
                        subtitle="Начнет охлаждать в 16:30"
                    />
                    <Event
                        icon="light"
                        iconLabel="Освещение"
                        title="Xiaomi Yeelight LED Smart Bulb"
                        subtitle="Включится в 17:00"
                    />
                    <Event
                        icon="light"
                        iconLabel="Освещение"
                        title="Xiaomi Yeelight LED Smart Bulb"
                        subtitle="Включится в 17:00"
                    />
                </ul>
            </div>
        </section>

        <section className="section main__scripts">
            <h2 className="section__title section__title-header">Избранные сценарии</h2>

            <ul className="event-grid">
                <Event
                    slim={true}
                    icon="light2"
                    iconLabel="Освещение"
                    title="Выключить весь свет в доме и во дворе"
                />
                <Event
                    slim={true}
                    icon="schedule"
                    iconLabel="Расписание"
                    title="Я ухожу"
                />
                <Event
                    slim={true}
                    icon="light2"
                    iconLabel="Освещение"
                    title="Включить свет в коридоре"
                />
                <Event
                    slim={true}
                    icon="temp2"
                    iconLabel="Температура"
                    title="Набрать горячую ванну"
                    subtitle="Начнётся в 18:00"
                />
                <Event
                    slim={true}
                    icon="temp2"
                    iconLabel="Температура"
                    title="Сделать пол тёплым во всей квартире"
                />
            </ul>
        </section>

        <section className="section main__devices">
            <div className="section__title">
                <h2 className="section__title-header">
                    Избранные устройства
                </h2>

                <select className="section__select" defaultValue="all" onInput={onSelectInput}>
                    {TABS_KEYS.map(key =>
                        <option key={key} value={key}>
                            {TABS[key].title}
                        </option>
                    )}
                </select>

                <ul role="tablist" className="section__tabs">
                    {TABS_KEYS.map(key =>
                        <li
                            key={key}
                            role="tab"
                            aria-selected={key === activeTab ? 'true' : 'false'}
                            tabIndex={key === activeTab ? '0' : undefined}
                            className={'section__tab' + (key === activeTab ? ' section__tab_active' : '')}
                            id={`tab_${key}`}
                            aria-controls={`panel_${key}`}
                            onClick={() => setActiveTab(key)}
                        >
                            {TABS[key].title}
                        </li>
                    )}
                </ul>
            </div>

            <div className="section__panel-wrapper" ref={ref}>
                {TABS_KEYS.map(key =>
                    <FixedSizeList
                        key={key}
                        className={`${key} ${activeTab} section__panel${key === activeTab ? '' : ' section__panel_hidden'}`}
                        width={width + padding}
                        innerElementType={Track}
                        outerElementType={Outer}
                        height={120}
                        itemData={TABS[key].items}
                        itemSize={elementWidth + padding * 2}
                        itemCount={TABS[key].items.length}
                        layout="horizontal"
                    >
                        {EventContainer}
                    </FixedSizeList>
                )}
                {TABS[activeTab].items.length * (elementWidth + padding * 2) - padding * 2 > width &&
                    <div className="section__arrow" onClick={onArrowCLick}></div>
                }
            </div>
        </section>
    </main>;
}

setTimeout(() => {
    const root = createRoot(document.getElementById('app'));
    root.render(
        <>
            <Header />
            <Main />
        </>
    );
}, 100);
