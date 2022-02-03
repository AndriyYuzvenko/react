export interface Classwork {
    mission_name: string;
    launch_date_local: string;
    launch_site: lLaunch_site;
    links: lLinks;
    rocket: lRocket;
}

interface lLaunch_site {
    site_name_long: string;
}

interface lLinks {
    article_link: null;
    video_link: string;
}

interface lRocket {
    rocket_name: string;
    first_stage: lFirst_stage;
    second_stage: lSecond_stage
}

interface lFirst_stage {
    cores: coresObj []
}

interface coresObj {
    flight: number;
    core: lCore
}

interface lCore {
    reuse_count: number;
    status: string
}

interface lSecond_stage {
    payloads: lSecond_stageObj[]
}

interface lSecond_stageObj {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}