
export interface FileItem {
  name: string;
  type: 'file' | 'folder';
  icon: string;
  iconColor?: string;
  isOpen?: boolean;
  children?: FileItem[];
}

export interface TabItem {
  id: string;
  name: string;
  icon: string;
  iconColor?: string;
  isActive: boolean;
}
