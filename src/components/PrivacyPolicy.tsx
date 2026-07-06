import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Login() {
  const [openPolicy, setOpenPolicy] = useState(false);

  return (
    <>
      <label className="flex items-center gap-2 text-sm text-white">
        <input type="checkbox" />

        <span>
          I have read and agree to the{" "}
          <button
            type="button"
            onClick={() => setOpenPolicy(true)}
            className="text-blue-300 underline hover:text-blue-200"
          >
            Privacy Policy
          </button>
        </span>
      </label>

      <Dialog open={openPolicy} onOpenChange={setOpenPolicy}>
        <DialogContent className="max-w-2xl rounded-2xl">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>

          <div className="max-h-[60vh] overflow-y-auto space-y-4 text-sm text-gray-600">
            <p>
              Your privacy is important to us. This application collects only
              the information necessary to authenticate users and provide claim
              management services.
            </p>

            <p>
              Personal information is processed securely and is not shared with
              unauthorized third parties.
            </p>

            <p>
              By continuing, you acknowledge that you have read and accepted
              this Privacy Policy.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}