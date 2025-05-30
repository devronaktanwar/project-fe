import { useDeviceType } from "@/hooks/use-device";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
interface ModalOrDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  dialogClassName?: string;
  description?: string | null;
  children: React.ReactNode;
  hideTitle?: boolean;
}

export default function ModalWithDrawer({
  isOpen,
  onClose,
  title,
  description = null,
  children,
  hideTitle = false,
  titleClassName,
  descriptionClassName,
  dialogClassName,
}: ModalOrDrawerProps) {
  const { isMobile } = useDeviceType();

  return isMobile ? (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="px-4 !max-h-[90vh]">
        {!hideTitle && (
          <DrawerHeader>
            <DrawerTitle className={"text-left md:pt-4 " + titleClassName}>
              {title}
            </DrawerTitle>
            <DrawerDescription
              className={"text-center " + descriptionClassName}
            >
              {description}
            </DrawerDescription>
          </DrawerHeader>
        )}
        {children}
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={"overflow-auto p-4 " + dialogClassName}>
        {!hideTitle && (
          <DialogHeader>
            <DialogTitle className={"text-left pt-4 " + titleClassName}>
              {title}
            </DialogTitle>
            <DialogDescription className="text-gray-500">
              {description}
            </DialogDescription>
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
}
