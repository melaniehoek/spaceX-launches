export interface ILaunch {
  id: string;
  mission_name: string;
  launch_date_unix: number;
  links: {
    flickr_images: string[];
  };
  launch_success: boolean | null;
  upcoming: boolean;
}

export interface ILaunchDetail extends ILaunch {
  details: string;
  launch_site: {
    site_name: string;
    site_name_long: string;
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  links: {
    flickr_images: string[];
    video_link?: string;
    wikipedia?: string;
    presskit?: string;
  };
}
