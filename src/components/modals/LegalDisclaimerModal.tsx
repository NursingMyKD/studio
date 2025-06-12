import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ShieldAlert } from "lucide-react";

interface LegalDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function LegalDisclaimerModal({ isOpen, onClose, onAccept }: LegalDisclaimerModalProps) {
  if (!isOpen) return null;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center space-x-2">
            <ShieldAlert className="h-6 w-6 text-destructive" />
            <AlertDialogTitle className="font-headline text-xl">Legal Disclaimer</AlertDialogTitle>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription className="space-y-3 text-sm">
          <p>
            The information provided in ICU Edu Hub is intended for educational and informational purposes only.
            It is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always seek the advice of your physician or other qualified health provider with any questions you may have
            regarding a medical condition. Never disregard professional medical advice or delay in seeking it because
            of something you have read on this application.
          </p>
          <p>
            Unit-specific policies are subject to change and should always be cross-referenced with the most
            current official hospital documentation. Reliance on any information provided by this application is solely
            at your own risk.
          </p>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onAccept} className="bg-primary hover:bg-primary/90">
            I Understand and Accept
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
