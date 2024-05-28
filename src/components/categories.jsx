import React from "react";
import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";

const categories = [
  {
    id: 1,
    name: "Kurtas & Kurta Sets",
    image: "https://clothsvilla.com/cdn/shop/products/party-wear-gaji-silk-printed-plazo-kurti-set-by-looknbook-art_1000x.jpg?v=1680884148",
  },
  {
    id: 2,
    name: "Sarees",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YYTCxmAdGBcGwNsWVd02vT6wYM0A8cLC_w&s",
  },
  {
    id: 3,
    name: "Dresses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXsvs4W-e0ZLL28YzS-tQc8q2pz_Enqwd8g&s",
  },
  {
    id: 4,
    name: "Flats & Heels",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEhIVFRUVEBUWFRcWEBUVFxUWFhUXFhUWFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8mICUtKy0tLS0tLS0rLy0tLy8tLS0tLS0tLS0tLi0rLS0tLS0tLS0tLS0tLS0rLS0tKy0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABJEAABAwEEBgYGBwQJBAMAAAABAAIDEQQFEiEGMUFRYZETIlJxgaEUMrHB0fAHFSNCcpLhU4Ky8RYzQ2KDk6LC0lRjo9MkNHP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAtEQACAgEEAAQEBgMAAAAAAAAAAQIRAwQSITEyQVFxBSJhoRMUgZHR8BVS4f/aAAwDAQACEQMRAD8A6SQkFqeISCEA3RKaEdEoICVYBUnuVg1ijXYzq13n2KaEAnChhS6oiUAmiKiUSiqgCoo14TiOMuO4gd6klyzukz3uexjSGtoS7eammWzIA+JG7MCBZJ+kkwjMnM01NaMqnvV9DGAKBQrtgbE0ADM5k7TxJ2qa6Wmay5J7mb8eNxRUaRWkgBjdZ2exYe222WImprwaStdeMgfI49lvmcvZVZi0RBzqlZclpo0465Rnrw0ldGKljxmADvJTbrdNK8MY4gEVJy9uoDmVcaU3WH2OQtHWazEO9vW9yj6H2ASuY0HINxOO89604IRkuTPmm4vg22i11CJmNxLnEaz8Tmr7Xs9yKzQ0AA1UT9FsMDdlVel3NeK6jsO0LLXbpBNDI6INBo6jgdpGVa69S21pOSxl9N6O2sLcukbnl95ppXkW8lBBrLHfTXgY2lh5hWTJA4VBBHBUUNjq1JDXxGrT3jYe9AaCqBcodntYeK8xuKeJqgHcSBcmQ124pfRPOxAKJRYkBZ38Efort6ASXpDnp70M7/JD0HiUBCkeqYv+3eB2GnxNfgFpvq1vHmm47liBLg3NxzNTnQU3oCnCCvvq1nZQQEn6u4ovqwbyrRBAVf1YN58kPqwbyrSiFEBXwWQs1E69qewuUqiFEBFodyIgqXRCiAglrkRBU7CkliAguruVbekAeWOzBaT4iivzGszpRansdhYMywNZ+N5wtHPCueSVRO2CG6aI0UtWtf2pC0cesWg+VUT5SZXR1NGxtcT3kin+lQxPhEEYz6OuKg7LC2vMhPyA9C+fERjLhQ7AwAc61WNHpvhorZHUjcdpDnfDyoqxgqAVd3xck8cDn9VzBES4h1HCja5tOvwKo7rNWhW1CpxX0M+ndqT+o7af6oin3Sqv6K4ah/8A25MA/dzJPNqtb0dhjPclfRfYsMD59ssjqdzSRXxP8Kvp+znqejcJDilVTchWwxEe0HYsram9NbxuibQ/idmfLD5rSvdV3ALFaMTPtMskzBUOkc5pI6oBJIoNppRQDfxtyCTLECFEjhkbm+UngA1o8hVKmtFAgFXfDhkduIHkf1V1FGFT3fnt3k9yto5EBLbGEsRpuN6eBQCcCPAloigE4UMCNCqALChRGiqgBRBCqCAkoJGJHVAKQSao6oA0EVUKoBSJFVDEgDQSaosSAUsxLE6a3tBFWsf0h3ARijO44sJ8FpC5IAAqQAK6+PeqSjuo6Y8my/qqMS546eSgpSOSn+dGPYSrSyWEzWSIDIEvJz2OkqTxyB5qYy5GCR8lfXFBTYC7Ea8agKfBE2NjWNFGtaABwC5QxepoyahUtvf/AAjaQNrZJwP+nk/gK5vcnq0XTrW3Exze0xw5ghc2uZlAuWqXzJl9I/lkiNpHLhjdwafYtTopZOhscER1thaXficMTsu8lZXSGLFRnbe1v5nAe9bqEexdNMu2c9U+kSUxO6gTtVCtT9i1GQqdI7T0dkmcDQlmBp21f1QR3Vr4Kj0TsrWsFS4973HyqpWm0n2cUXaeXH90UH8XkmrnOFoUA0TpQBkocsxJAG0pmWfJSLjixuMh1DV3oC9sceFgyzpnlnwrz81JYVHxJxrkBOhepLXKFEVIa5ASQUVU0HpWJALqiqkFyLEgHKoqpsuRYkA5iQTWJEgJONHjWKj0ktP3rI8dzwfaAno9JZNtmmHgw/7kBsA9HiWXZpJvilHewe4p9ukDdrXjvY74IDQ4kMSo238zj+V3wSxfcfaHNAXOJDEqcXzH2m/mCUL2Z2hzCAtcSIuVaL0ZvHNGLybvQFgXIi5QPT270PTm70BNLkguUQ2tu9JNrbvQElz1irNZ8LnDc9w5Fah1pG/zVOWDG873E881m1K4TNekfLRnrxjxWiAf99h5HF7lso2ZLKWk/wDzIP8A9T5McfctW0k68uCtp/CU1PiFOOSr5DVylzuyTGCgFdoJXczmM0slxWgN7DGjxPWPtCRYpMlXW609LK+TtPJHds8qKVZnUCElq0F7gwbfILSWYBjQ0agFmLHbWRj1gSdZrXwUsXw3ifA/BCDRB6kxuCzDb23McfD4p9l5ynVE7mEBqGSBOiULLtttoOqL/X+iWJbUfugeJKA1AmCBnCy/R2s7Wj90+8ovQLUdcp8Gj4IDTm0Dekm1Des39UWg65neXwSvqGU65X/mI9iAvzbG7wmzb271SjRxx1ySH/Ed8UP6KsOup7ySgLb6ybvRqq/onF2RyQQGu9FbuRGyN3J8FHVARTYm7kk3ezcpqCAgm7Wbkk3WzcrBBAVhulnZSTc8fZHJWqCAqDcsfZCQbkj7IVyiQFKbkj3JJuNm5XZSSgKJ1xt48ym3XIN5/MVoCkkIDPG5OLvzFMizdGXN3U18QtIQqq3M+0cN7Qfd7lwzq4mjTP5/0Mm8Vt1n/FIf/E4e9adnBZktJvCMdmORx8QG/wC5aU7grYPCRqPGIkNSq7Si0dHA6msswN73mnsryVnGKu7lR6YGvRt4k8hT/cV2OBl7LZgGFx2BXFy3PVuN416hw3qVdl2hwBcOq06u074D21V8xqgFcy6GdkKTHdbRsCnNCdagIsdgaNilR2Ubk60J5oQCGQBOtiCUEsIAhGEoRpQSkAjo0eBKqhVAJwIYUdURKAKiCFUEBIBRpAKOqAXVDEkoIBdUKpFUKoBdUVUmqFUAqqIlJJRVQCiUklCqIlAAlIJRkpslAHVVl4OpK072081YEqrvF/2g4NHtK5ZvCd9P4zMvqy9Ix2oJRyLHD2FaLV3lV9tDfSYngVOB/wDD/JWEbCdanF4SNR4xyBtAqm9bJ0s7Oy1lT4nIeSugKKNPr8F0OI01oAoBQDUnAm6owUA8HJ1hUXEno3ICUxPNUdhTzSgHQlhNgpYKAcCFUkFCqAVVCqQUdUAqqKqKqKqAOqCKqJASAjqkgo6oBVUKpNUVUAuqCRVGCgFVREpJKKqAVVCqQShVAKqiJSSURKABKQSgSkFyAzP0g6VtuyyOlyMzwWwN11fT1iOy3WfAbVBuy0mOKJkkrpXvbUyPNXOLgX8s6AbBQLnH0uvltV8NsorlHDHENlZcy7mczubwWpvi1tjtdksjM8L214NYx1OYas2ofSNujjbbNBLbgLYxuz0eR2QJPrRgUAzOtWAtExBLGtbuxkk+LW/FVFhs+O2yT7GwNib3ucXP/hYtC4YWrisskqR3yYYudsw182q9pJRDFaGRlzqAtiaABrJJfiOQqtPdNmkijDZZ3zvrVz3ADwaBqCjvb9s1/wDepzBHvViXLvp5OSdmTUxUZJJDmJDEmsSGNaDMO1TsZUYOT0TkBNjKfaVFjKfaUA+ClgpkFKDkA8Cjqmw5HiQC6oVSMSGJALqiqk4kWJALQSKoIB0So+lC8+u+la9D/ZQf5Mv/ALEg/Sjeh+5D/kv/AOaruRNM9C9KEOkC4do/pXfdtfRgiaytC90LqdzRi6x8t5Cm6Y35fN39Gelila+tS2z0wu2AjGdYrnwKWU3Ldt/v79HYulCMSjevOjvpEvc7Wj/B/VaPRW8b6tpxPlbFHvMIxO7gdQ4+RTci0vl7O0GQJi1WvC0kesSA0f3iaDwXItObbe1gMborT0jH1B+xYS1w7hmD3bE1oRpVbZ3yRWl56TDiiJjAbk1weAAPX6wIrWoBpnrpPIkrL4o72dat19wwmj3ivZAqeQ1eKj2XSSGR2EYhxcABv2HJcxjtTn2kWcudJgiJlnLQ0OkqOqxo2dbbnltotFJZcMOJrqGoqaVqAQaU25B2W003LLLUz3GuOmhRsH39Zx/ag91T5gKRHb2OGJrgRwXOLFaTLidTCBI9oG/C4io4Kb6SYuq8Esew9ZrqUe0jCzIh2I4siNxrRTHVS3U0JaWNcM3DrWN6SbUN64DpNpDeDrVJ0Mr2xjAAGtbSojaHa6n1g7ae9Vn15e37eTk34LUsiasyvG06O06R3NDJaYbwA+1ha9neHA4SeLSXAfjO4LlcGk4bejJLRQRR2iXE4BzjQxmNtaZkA11D7xUe5tILwbPG6eV7osYEgcGgYTkXEgbK18FQ37EW2iQlpaHSOLcqVFdi5tKU+fQ7qTjh47s7nozeLJ4+nYOpJK9zDmCQ1xYDQ6smg04q/Di/JYj6KZg67owfuyyt/wBZcPJwW7JpqWaUabRpjLdUmVV4kMLeDgeSR6a3eoGlcT3QShpIcY3YSNYdhNCPGi4b9a239tLzXfTukzNqY8o9Belt3oG1t3rz79Z239tL+YofWVt/bS8ytG4zbT0B6Y0bU/FbW7155FvtxyEspJyFCczuXRruszrPE2OV7pJXCry51aOpqbuA1LnPLtVl4Y9zo6VHbW71JjtQ3rg2lz7XFOHQyyhkjA4APNA4HC5o5A+K193l0UcUcr3PeYxicXEnERU0PeaeCiWalYWK3R09tqbvSvS271wbSwW+zyB0NpmML/V69cB2tPuVCL2vL/qJvzFXU01ZVwZ6Y9MbvRi1t3rzXDel6OcGtnmJJAArtJoPau5WWBsLBC4l7gxtXONXONOs4neTnlSmxUlmUXXmWhicjRG1t3oeljeuO6f2W3WUtnstomMLzhcwnEYn6xQkVLDQ0rqI15hWP0XOtkrLRPaZHuDaMjDt46zyMvwjxKieojGO5+w/Ce6jqHpY3oeljes3bWNtEeEOfGe0x2FzTvFRQ9xBC5RpOb3sMuA2mR7HVMcjQKOG0EU6rhtCtHMmJYnE756U3eiXmv8ApJen7eXkPggum5FNrOpsuKP9m3kE9Dcsdf6tpp/dyrurt7h5K6EYcey3j1SeeoefcpYEbQCXtA2bR4UWNYZLtOyZavHPhTSXurf8L69+ldjd3WQNoGgCm4U/koF8WhkzntIBAIaNuba58yUd4Xp0lYLKCXEVc89WjdRwV7/Wpls4R7vubCQ6Z2WwCtOfgtEMMtrcvM83UauG+MMbVJ33x+/oMWa62nPA2n4R5b/YtBY4sNApMIi9XEBlkKEZDcNyOa2wxCvrGmpoJJ8dQ8Vx/Cn1VG9Z8V73NN+/2X9t+ZWaS4S4NOyOureTT2KlhiAcHN1g1GQVdfF9OfPhPWe9wxAVo1uxvL3lae77vwgYm5kVpmD411e1c8yVpLyOui3NSk+m7Q5KI+qTE3E5pccgTryLi4baFJjjNS4voCCA0AYaca6+4UTlto8kinVGZ1NaB5UCxNu0hfM8w2Jpko4B8pBwgfewnu2rjyejfBrbOYHUbTC7hEynhuRXjd2ZAFaOqC84iKZigHs1IrDZ6nEDVwLQ7g7C00HAg18VLtb3GQ0PrE5V8FBJknWIbvJNmxjd5K6s1mJGda15d6f9C8FbacrMvb7tL4ZGNAq6NwFRQVIyrkqDSyyvfYw50dHRubmKnNxDSG5AkZjZsXRJbNQHPmQqO/2AWelQftoBv/tmK0G00VkrTGPoWfisk7OzaQ780bf+K6NIclyr6KJOgttqshq0OGJgO0McQD+VzV1KY5Lrl7snD4UVt6N6hXOH3WKkZ6yui2x2KoWZngo4j3ridZrgzjruaN6aNlaNnktC+zj5ooVosilWcuBq4rE0yY6ZMFcxt2ewlPWvE6UFoJAOZVhc9kIYANbySe7UPeVqIrraG0oNW5S/QL1MdbQC2Mkf2rWmo1YvnzS7wjc9wwDUVY3jZW0J2Nmi8pGk+0clY3LZWuc4OyLTTvBzB5HmCrN3FIqlUmytbZxJEWOGeuh3jUQqs2QA0I1cFt7bYMqjWNSoXxB5xb94zBBIIPdRUa4LWM6OWVhmDiB1AXatooB5kcldSY3S4sJI38aqts0vozw8sxNdhaaGlAXCpIoa0pwW5EK5KUYybk69yboob0ia6CSuroy7xaMQ8wo2jlpb6MANVSDTiaq8vO6nSxOjY5rS7JxNT1duQVLdGilosr3OFojfG6n2boiKEbQ/Ec/BZc+fHKSd9NP3CHrPC4H1TQ7U3pFZw6zmorRzSO+uH2ErQwUcMxQjI8Ck267WTNwOLqVrkaV78l0lrcTVJ2QzmfojeyOf6ILdHRSHtP5t+CCfm8fqLJcgawk7KaqbeB+dSoL4vNkTCQaE1J61da57C2+H5dKQOLfiVPi0RnlIdarS+TP1AcLfFeu9Sjwl8Jd9m60UtEDbOJTKzFL13dYZbGgdw86qzmvSFwp0jeaxVsuICHo42sbu6oJHcssdC7QT/wDYf4SO9xXNap2aH8Kg12/sdUtFvhoKvBpn6wFTvNCqS1X/ABS2iOyxyAukeG5HMDW48gVl7HoE006SaZ+8Avp7VpLs0egsgxwxUc3PFhzr3pLU2Tj+Fwg7bNrBdETHYmgNOEVLQ1pNBTNwGI+JS53NZtPi4n2lZW8PpAghiAcJel1FgheTzphPfVZt2kduthpDZ3RsP35a/wAA+K4M9aNLg0GkNrY5pDqYT1SN9dYptTtw2WIBjGMwt7gFWWDR0FwknkfK8aq5Mb+Foy8VcvBjFWjMata5lmzQRXbhJLS1laamVdlWmJzq117gky2WhqS098YB8CCFV3dpdZi7o5JGxP3SEM5F1AfBVukGm1mjcWNma47Aw43HwbVdCKJlse1koNdYNacc68081uIVBWauqWW1yNkcDHGCTQ+s/dXcFrWsAGRUIrPsr7RDrzVFflhdLCWMeGuDmuaS2oqxwcARUZZLTzxgjX5BV81jrt8k6K0cw0knnsVqs9sGHGGluVcJDPuu7w8/IW2s/wBJthkjBeZI3UzaYnOoeDmAghV+mOj5tFnIb67DjZUayAQWk12gnxouTyxuYS1zS0g0IIpQrRjUZxpnKcpY5Wjscunl37JnH/Am/wCCzGlOl8MhYbLiLw6pe5pYMOVW0OZrQbNiwAclhy6RwRTsrLUzkqOtXPK21RCVjsjkRTNpGtp4hS7RYiBr2LnWht8mzWgNJ+zlIa/cCcmv55HgeC6tNHibkRyWfJHZI6QluRBs8uQplx3Jx9pcci5539Y05LP2u3zWc9aPpG72mjx4HJ3kmXaXWYRhox4q6jGajhuK1RlGXKM8oyXDJmkFoAic7OresKnY0hx9itbttRIDg4jed6w9vts1qY5scRGJtKuyND2Wj2p6C3WqzsDZYcVAM2Ozy3tI1+Kb49WRsl2dBdbn9t1NWtMSzAGm2vPiVjmaaR0p0M2LiBrUu7ryltD21jLG4hrNXHwGpVm4pFoqTZsfSRGA8j1TXUVortvaOVoLHgjgfbuVKyygso6pr3qgt+jwxY4Xvjd2mktPjTX4rxtVplld3TNkTprJAUchouTNvi87MaVbOBqxNwOP7wy8lNZp3bHDAbIGnViLiQPABYfyeZPyf6k0jQz6SwwW51lfI1pfGyRuI0qTVpFT+EK9gvBrtRC5NeOjJtrzNLUvOt1aatQA2Dgop0VtEWcFomZTVSV1ORNF2fw6L5jOn58cWLfmjt4kCJcSEN6DL0uXxcgo/wAfk/3X3/gjj0Z0uOzcFJZCNycDD8hKDDvHJeoirIlohz1e1NtgG7yVgYj8hNGJ9fWp4KKJQmKAbh5KR0YpqHz4I42u2u/0ge9OgHf5KxUqZbuaTm0HdUfon4rENynHv8kRrvUUi1sZbEBsSJYQRmFIJPyEgk7/AJ5KeAUV4XJFJk+Np71FsGjNnidibEwFaUjj5IsBUEjUMAbsHJO0R4TwSSDwUpkMbk+dSjPA+QpMgPBR5O4KGwkMuaDsHl8VBtl2wS/1kTHcSM+aneA80oxk7Pb8VFlqMtatDbG/7uHucHfxgqrn+j2F3qSU72t9xC3LmO3D58U28OGzy/VWU5LzKuEX5GJu76PGMeHPe14BBA67cxmKjFn3Lc2azYRQmvckQh5+4aU1ks9mKqk0PZ8h8Ucm+wopdES0WJrtbQVXvuOEmvR5/PFXD2/3U2IeHmoJIllu1jdTKJUt3sOsA/u/opmBJeafP6oCp+pYa+oO/CFNsd1saagDkn2NJz/RSGZBEQx0M4/PJIfZgf5pWLvQLlLSZBElsg+SmhYRv8wp57/ciofn+SrtJsabZQBrP5k0+xj5cpRrx5JIBTaLIPoXE/mCCmkHcglCyxwu70sNI1oIKxAGurv1pYjO+vgAggpIYDHTaeaIEb0EFIATXh4AogPnUggoJCIz/VEGnjzRoKCQYD8lEB8/JRoIA8QR42/NUSCJECHs4KLMDQ0+eaNBQ0WRGJIOEa/JNdY59/lkjQUFhyzszqXGm6nknXQA51KCCgMZLAN/NKLANYQQUlQqDVuptKUI/mpRoK1EAEedPn2pZgaBU+wIkEoWG2MfICBDR/IIIKUiLB0YO/kEBHX+QQQShYRiHyEktG88kEFFAINCI95QQQDZeN5RIIJQP//Z",
  },
  {
    id: 5,
    name: "Handbags",
    image: "https://m.media-amazon.com/images/I/71vz71m5usL._AC_UY1000_.jpg",
  },
  {
    id: 6,
    name: "Shorts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXWHqbmF3LqKvPPYqJn1S39_i7MtOiZUGjg&s",
  },
  {
    id: 7,
    name: "Jeans",
    image: "https://i.ebayimg.com/images/g/9RMAAOSwjVVV0qRe/s-l1200.jpg",
  },
  {
    id: 8,
    name: "Skirts",
    image: "https://m.media-amazon.com/images/I/41eWnnaXAAL._AC_UY1100_.jpg",
  },
];

const CategoryList = () => {
  return (
    <Box py={8} px={7}>
      <Heading as="h2" size="lg" textAlign="center" color="gray.600">
        CATEGORIES TO BAG
      </Heading>
      <Flex overflowX="auto" className="scroll-container" py={4} px={2}>
        <Flex
          flexWrap="nowrap"
          w="full"
          gap={10}
        >
          {categories.map((category) => (
            <Box
              key={category.id}
              textAlign="center"
              bg="blue.50"
              p={4}
              borderRadius="md"
              boxShadow="md"
              minW="200px"
              flex="0 0 auto"
            >
              <Box
                bgGradient="linear(to-t, pink.300, orange.300, blue.200 , red.300, yellow.300, black, blue.200)"
                borderRadius="full"
                p={1}
                mb={4}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  borderRadius="full"
                  boxSize="150px"
                  mx="auto"
                />
              </Box>
              <Text fontWeight="bold" fontSize="lg" color="gray.700">
                {category.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CategoryList;
