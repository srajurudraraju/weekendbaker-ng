export interface MenuItem {
  text: string;
  dropDownTarget?: string;
  subMenuList?: string[];
  isDropDownMenu?: boolean;
   link?: string;
   active?: boolean;
}
