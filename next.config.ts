import type { NextConfig } from "next";
import {withPayload} from "@payloadcms/next/withPayload"

const nextConfig: NextConfig = {
  /* config options here */
    images : {
        remotePatterns : [
            {
                hostname : "*"
            }
        ]
    }
};

export default withPayload(nextConfig);
