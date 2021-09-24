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
}
