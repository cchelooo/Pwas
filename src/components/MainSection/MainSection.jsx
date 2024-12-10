import React from "react";

const Card = ({ title, description, image }) => (
  <div className="flex flex-col sm:flex-row bg-[#3a4c61] rounded-lg overflow-hidden shadow-lg w-full sm:h-[152px]">
    
    <div className="sm:w-[320px] bg-[#5f81a9] h-48 sm:h-auto">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      )}
    </div>
   
    <div className="p-4 text-[#e6e8eb] flex flex-col justify-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-[#aebbc9]">{description}</p>
    </div>
  </div>
);

const MainSection = () => {
  const cards = [
    {
      title: " ¿Por qué elegirnos?",
      description: "Diseño único: Encuentra muebles modernos, clásicos y minimalistas que se adaptan a tu estilo. Calidad garantizada...",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGRkYFxUYFhoYGhcVFxgXFxcZFxcYHyggGholHxUYITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mHyUtLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMkA+wMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBgMFBwIBAAj/xABOEAABAwIDAwcHCAYIBgIDAAABAgMRACEEEjEFQVEGEyJhcYGRBzJCUqGx0RQjYnKSweHwM3OCk7LSFSQ0Q1Ois8IWFzVUY/GDoyVkw//EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACoRAAICAgIABQMFAQEAAAAAAAABAhEDIRIxBBMyQVEicYEUM0JhsaEj/9oADAMBAAIRAxEAPwBgJoHah6I7fuNS/KOqh9oKlAP0vuNKU7QTjTAwKkCa8QKlSKEI5AroCvQmpEorDqJGGJSTqRuqAYpr1h9oVbbNZse6sOwmzkKElIPSIN4iI/GtdNWcu6Nhw+KYUoJLiRJiSoQO3qrraWKw7SsvPNq60rBHjWY4bYLRNgRwJIHD1VHrox7k4FJHzi1gaJzSOuBM1PLLFOuQ5YpNXQ4ubew49Kf2k0QxtBC0hQSYOnSHwrMcXsVCZgK7P/dOvJ9EYZocEgU6O/cXLXsXvypPqnx/CvvlKfVPj+FBRXooxYb8pT6p8fwr75Wn1T4/hQVexWmWG/K0+r7a8+VJ9U+P4UHFfRXUdYUcYn1fb+FQObYYSSlS0JI1BWARIm4PbUSxS5tHYza3XFqSPRklRHoJFgCOFBLS2HHbGY7Yw/8Ait/vE/GicTjMIloL+VMlR9AODMO3dSL/AMJgDOTlTuUkq8bUA/sFA9NRO8qJ+E1O8kL9Q9Y5fA4Pbewo/vEn9tPxqFG10L/RpChxzSPZSFiNnIAOmhjW9NHIbDD5Nm+kr2Eitmko8kzo3dUMRatUDjdXxwwAngKrnH2j6X+U0DkkFFN9FUtNDrFWTobPp/5TQy20f4g+yqh5xDUWAqqM0YttH+KPsqr1OAnRY8DXOcTeLK5VCLN6u17JV6w8DVPiGsqiJ0o4ST6AlFrs0R1uhsYYbE+t8asVJqB5zJ0gASJEESIVE+6n42TSAG6nSKjaFhRbaK2zqOEIoppqvW26nSmlykEkFYJMeysQwbd3YUAoOLCRlm4PHdW4Ybf3VhqVEPPiCYec0+uRrINHHcTOpFszhHDElTp+i2VAcAdSPwq3cbcDXRQrMI6BKgII11t3UAwltYQpaJAkKSpKzcgXGVV9PyaZfkzBQShhDqjN+ZkiRcjneiVaaib7xNefkttWXwaS0J2KUkXydPfKknti8007CE4do8U/eapdo7PUQIUJ1UPmpSfqtpGWI4xbdemXYLZ+Ttg6wf4lVXhkiXMmdxXsUQW65yVSmSshy19lqXJXuStMIcte5amyV7lrTgZQqj2ixLp6AI6JlS8g80ARe++mFSaqHwrnVRGomypHRGt491Ky+kbi7BENJRdKDfeOlE7xLgHGuMW0ggSlU8FJRBvxzTVsrCi5BKVHUlRyBUyYSTeZ/GaqNs4NSSUlaFSDCShLYuL9Imbd9eW1cu/9PSg1QvbTcCUqEEWMA/dFqYeQ/wDY09q/41Ur45Ssq5IsDpBgRYSBHfTdyGZnBIPWv/UXVk1WL8olT/8AT8D0610T2H3VSJwg4UxOJkEDWCKCTs5zh7amzJ6CxOrKdzCDhQb2GHCr57AOer7RQD+DX6vtFJVj1JFA5hxIq0wjVqhfw6kkZhEmNRrf4Ufh0WomwmzlSaT9p/pV9tOy2jSVtD9Kv6x99PwCcjs0sigtpjoHu94qxy0JtJvoH87xVcSNlBtDbTOHSkuqImw6JN9dwoZHLnBj01fu1/CqbygN9Fn9YmewhVUWL2QlLSliZAmijxpWZK09D85y6waTBWqbH9Gs6iRu4EUXsrlfhX3A02tRWZgFChoJNyI0FZXs3BB1wpVI6KDbrAFMexdmjD7RwoSTCw5YjSG1/EeFbKMOvc5N9+xreAuTWNs4cHFYkFUfPvCI4OK1NoHfWx7MFz2Vl2GcKcTjBMAYh86H/EXcxppSragxkUnJWXKHMqUFBkXBV88vSLhKCu/WYHbRgxDhOVtKYJnO6lRE7yFLUggboAnXrqFphJAs6Z1yqdSIEbiJOu6RXO0MMHPQdA80hDshU6Z0FbYi3AzXn6ci32oE2xhVqgmFEwJQy4UhIABg5iIAueN41FHbIxAbw7YVqArQRopW6hdoIgHOgWASDLqYSLHzM4G7QAxO424AHMNwIELtJO9W9QBPeBVWCWhGVfJyeXGE9dX7tfwrk8t8J6yv3a/hWdMxl1M2gRu7ZtXuavS4Igs0M8t8J6yv3a/hXg5b4X1l/u1/Cs8Ua+FbxONEHLbC+sv92v4V6eW2F9ZX7tfwrPQa9mu4nGn7I26ziSoNKJKQCQUqTANhqL1LisIFuXcNvRgWNt8SRrvtApX8myJdfP0Wx4lfwpzdYWXTKQpM2ELFrb0ghVT59IZi7A8UGj0HSoDqFzG8kSFDr/ChMWlJSIzrT6OVJGaLW5twJJEASRNqNfwfOkiFthMwRiFqlM7kAApEXvVU9iFI6KMyVgJhSyysFIBGggydZKgTXlyjvTPShL5F3byTlVJdsD5zeQze6ome0mTTryIZjZ7XYo+K1GknbheKVqWkkKGuVAHb0XTw4VoHI1H/AOPY+p71E1RP9pfcnl639i+2gCW3ANShUduU1S8m8DmbfC5kFvXUSVH7hTRg0S4kHeoUJiYQ7isthmZH/wBc0WXoTB/VRU7Y2QEIzydEmIVor6UR7aXy2BmVOgJJkmIBpw5RYg80hOUnMASoaJyhJGY7pmB2VQFgc06SJ+bcN+pCjQLVDYyu2cvsfNsDqH8Gvtq2wTECo8ciOaHAK9gQKKZVAqaT2OvR483WeY1Pzi/rH31oyjWe4hMqV2mnYQWaaE0PjkdA9lFio8WnonsNeiokTM38oiPmWzwWn/cPvoTaAJwzvUlZ7hrVh5RR/VgeCk/xD40I8mcM9+rX7QaWvSvuG+yi5NfpiOKEewgffTKr+3bOPEPD/wCu3vpc5Kf2gdbcDtzACmbEiMZsz/5B/kRr4mjl+5+AV6DSdmC57PvrM3JGMxiQ2F/PuH9Jk1UsxEe2RWn7NHS7vhWW7WeCMfixIBLxtcG5VcGOvjQSjcQoOpBjW0ASG1pywdVtF3NI0nKBOms6RG+jmHSU2Shak7ixkSNLphMns3Teg8Hi0DpZlBVwc8mU69EKOswfGu3NoICQVSDMApKtNRCU5kgX420qGUbdUWp1s7WUx5uTrbKlAEa5WSkjURoIvvr6Pm2wCpU5hKhlUZUdRuNDDAoWkLU6spNyrIE/5kJBH1TIE6nWiGcqUNc2SpIKspMyemZ1vrIp2HsXm6MwSDv139tezU+OA51yBAzrgTMDMYE76givVPOPRXQFcpqROtccfAV0BXwr1Irjhy8mSfnMT2M//wBaaMShXOOZRIzKBkSAq0Wm+vtFqXvJe2c+IMWKWoPGC6DTJtJyHSTIIzEKSDNjdObW8aA91TZ1aG4nsqluLSQSAoTpzbgmDpmCDmnqNu+vHcYFqGZSUETIzlK0zbzFFMmwsSLeB7U7h1CSsgknWU8QUglWkiwkDsNeYlYWCc6SDpJzHcJytpEWtObf2V5c4rlZ6MJNqig5Q4lQbcRDkQQSRlmd5zEkjvOlO3JAf1DDdbaPbWe8oGFFClBKAIkxnG8CQDE7t0WrROSI/qWFH/ia9wp7ivLX3Ezdzf2L5/GBgF4pKggZso1MbhY3qrY2gMQhx8JKQ4tBCSZgBChrbhVhthUMuG9kzbqqt2QrNh8x1UsG/wBUm/jR5+ieHqKvauL5zHlqFDmmgJz9FWdLS5KMvnCQJnjxorHJjDvfqnf9NVCvsn+ksSqLZEAHsQyP9povaE8ysDeCL8DAPsNLn6l+BuP0k+1FQtHUF/7KAYccUtMrygKUoIy+e0UkJkm4IJBOmgBAmpNuqlQHGEnsW4lB9hNQuqUHkGLBK5veDkJMcBA8aVFaY19It5saQ1i5p5X5quz40lZaKGjTTGk9Edg91cYodE9h91S4cyhJ+in3Cq7b+MLbciL29lek2lshpvQk+URM4RXan+NNK55QDm1oyecCJniCPvpxx+JStqFoC59FSQQYvobbp7qVEYhkRmw7ZF5+bSkDgAN5NvxoMbTR2S0yn2Xjgy4lZEjLEftz91MWA22MRjMGAmMi/HMlIO/cU980bsJhhSgtxDIQcyEpDY1JuCQPN6R1p22ZydwwUFow7CSkBQUltE7yCkgdWvXTfpbsBSfRf7OHS7qy/bS207QxmefOHrDVM3ykca1PAJ6XdWP8rkn+k8XcpAUgkj9Wg9u+ha+kOL+osMEpDkpSrKkSo5VOQkA+PE6bjXn9KuZpOHgEkBznCskTCT0lEwZjcQTFyapNoYs80oB1RmEkFRVIJEyo3iuGG0OBOZ8oCwJJTMFWIxKDAncAHP2SNADSYYFNOx0szg1RfqWCo9MoHpBvnACRqVqCoJG7tPVFrgsMVIaUgKWlKiZOphZJBmljCbRQW0ZlKBKQbK6N7mAoEa2/N3vkk4FYcKExmXqcx87jlTPh8aHDj+qmHmn9NozBPJLHxfDmfrI1+1XP/CO0P+2P20fzVtQbroN1dZCYv/whj/8Atj9tH81TYnkbjUkZGVLte6EweF1me2tkCK6yV1nGKDkltD/tj9tH81fK5J7QGmFJ/wDkb/mra8lfZK6zhJ8n2y8SyHRiGubEIydNKibuFXmqMRmG4a7662vtHm3XQlxSVZ1QD5vnHTNPsFOeWsv5QPRiXyUFUOOAELNoWbWiBE76Tm6HYlbC9obQeyS4gPFUZUlYZBJ0I6ICtd/DU2oNpWuZppozAKlTItEkqIB4wTFLW03Ct2D0IQfOJucqjM3PDwphwDaElS+fXMJgAlJKlZVqBIPmgOOC3qppXkXjv3G+dWSl0VnKFaAlcFskxpm0zDQyR7a0vkn/AGTCj/xs/wAKayzlC4jKfnHFLMTJtdQJsQST31qnJUf1fDD6DX8KaTNfRH7hSb5MteUJ/q7nYPapIoHZQjDJ+t/tHxr7ygKUMA+Ukg/NgQY1dbBv31HscRhWQer+BFbnWhMOzvGo+edVxMeEfChcWfmz1qQPtONj769ccl5++i1CN2qvhUWMV0QOLjP+s2fcDSpeobi9JztMS4BwAPeFkj2gVXbDwzsy7M3ygqznKrLN5MDogR28as8X+m/ZH8Sq+wxIX1xA8bfnqpUZOmh7itMNcENK+qfdSk0LU4Y+zK/qn3Uq4dHRHf7zRrSMiaFhGyG0A6hKQe0AVXcoMAVt66GfYasNiYnnWG3IjMmYmYMkG+/Sp8W3KYr0nFNEPJoz5Gz8yfOUndZURpJHXFC7V2AE5UoClTlMFUqVfKUhUdAnMSDxT1TTTh8MKl26iGFECSLjqy3zH6sTEiYib0rHFo3JT6FjD7IS2EFCpbWpUKSknmjKRC2z0hBGU705DJuad8K1lSALQALdVA7MwTZQgpQQkCUqUUqKguCVSCYKjc6SeNWyW6bQC7JsEOlWU8rFFO1MVG8tG6EqH6FGubd2VrOGgGTYAEk8BF5NZHyv2k0dovONqDiFBu6FgJMNoBhd94PhXNXEOL+optrYnnGz50gWhtKU2I4Hq4Wk1UPj5v8AOk4uD/nFXT2NTCsqComRBczQkyDBUCNN+WqVtl7LAQo6DdoCSL/tHxrMWkzcq2MGzUt2Qstg6ZspnKkQSVCAdIgHdWg8i0p+TDKQU51wQIGs6btffWeulyAAlSRABPOLkcbBZmtB5DJQMLCDKQtW4jgTZQnUn4nWl4k+VjM1caCdubfZwmTnioZ82XKnN5uWZ4ecKqv+YeB9Z392fjVR5XRbDdrvuarOUsqnSqSY17/mLgeLv7v8a+/5jYHi7+7/ABrJlYY8K8w+FUtQShJUokAJFySdABXaOo1r/mLguLv7v8at9gcomMWHS1znzfNzKALuryJi/EGeFZByj5L4jBhsvJTC05gUqzBJnzVHiAU3Ei9iYNah5F2mvkjhHOZlrWX7dFJA6IbtfoZSdbk9lcqZwzoTJyyMxmBxjhWX7fdl95GczzrliUiIWdDNuwitOwpCiF5fMNp9bpR2dG/YvWs+23ycxTqsQ802k/OOnKYzqHOKOZCdCIBMGDwBmkTuQeKVOzPNr4Qocgz0kqPnZosq2aBMWq12W30tSLEghRSdSPOAJEdm6q7HMLMEIEzeEwIIj1jPgKNaWQkggwd3UTJB49lG/QEq5nO31pyLyuL1TYvhc3v0UnSRv6tK1fksPm2B9Fv2IFZHtJlCmiEp6W6EoFuuBPtrVeRWNbc5tKFglASFJBuOiYkdx8KmmtR+475+xYcvh/UXe1v/AFUH7qgwywhvDIOqyUjtDYWfYg0dy5wgcwbiFOFoEpOcJK4yqCvNCk8ONKeG2pzmJQtKsqQEhKVKWJQnWQkZTJm3ttNMlj5uhF1sPbVLuI/WK/iXXeIaBCJvDrZHbm+E0VjsAWlqWRCXiVpg8SSRp9L21As/o+txPsS4r/bUuVcZtFGLcEznED539lP30Zh2ukVdQFCOfpldifcKsmRapolEiPan6BfZ8KXcK30B+d9MO2f0Cu73iqzZ7EtpP51NMYMehh5IPleDaUQATnslISLOLFkiw0qxxWJQmylpT1FQB9tIOK5YKbb5tClLImXFEZjJJ3CABMd2pqk2VjTisS20txYStRCssBY6KiIJB3gaj416y0iCW2PreLQPTT9oUc3jmjADiCbADMCZ3ACdZpGx/IlxLiv6wMpTKCAcxWZy50boAMwTOtrwz8geS/MtjEPFLjy0kpCVZktp4JOilkG6tBoPSJBTjWjeD6JNk41tAcQpxCQHV5BmSBzZgjKJ0kn21ZJ2kx/jN/bT8aznykYE4fEBxFm3hmAiyXBGcWteUqtvUrhSnh8aspJk60cdoF6Zu39JsQfnm9CPPTvBHGvz/iNiusoCltwABJzJMHT0SfyanOLWVQJmK5WSUrkzbj9IUVA2BYYIKgFCE7yBJjqBIB8RUzjaAhJyyo5swgQIMCDvkdQ76hZFx+d1EPeaO1XvrjQXokjoj2fCtY8mJjBEf+Vf+2soAuK1PyZn+qK/Wr9yK44E8qaiBhlATC3LbtG9fClXYW1mWgrnsJzxKkkEqWmImR0YsZ06hwrYATUqVHiaxxT7OjJrozrAbawmIxTTf9HIAdcbQTLsAKVFhmga8L24VXYfabWExTwOE5xTbriErzLBGRSm5ASQmSBNwbnqrYGFkEGd499SrcJJMm5PvrPLjVGvIzLMZyr+UtjDttLSYJSXeklTnqK4JUmU5ja4kAXD75LMPlwiCGubClOKSgpyqIIHnZhJuCkE6pSk1cobJ1069PCicOFA7u2a5JRpIGilzqbCWwkF1UnJoAZ6SleqhJIHHzQKQsdy9dY55tDKOcDjrfOlRIstaVK5sjecxAzQJAvF9lxODzDMAFLsCd8C8TF9TrxNfm3lCPnnv17/APrLpjiq2AipCUAQGx4/hRb+GbSlSgJhcJkRKYFzc5Tpa/nG9rwITReM/RftH3J+FYkGVy3kjRseNOnkmxjbTr7jhyoHNiYJuQ7wBNIrmlX2wDGHxPWWh/keoZrRsWbNtLa2FdbKQ8gg63HmwZ1jdWaMbGeS7IcaKQbHnkXE2MTbTSkxD7kEJCjHqgmPCu28S6jzgodoIrYxSdmO2a9i9pJcCU86g5EgXWNTr9w7jUSnk5mumghKsxAVmN0KQLDd0yT2dxyI7TVJIps5Kp+a51eqzabQlOl90mTIk6RBg1P4iEPW+x+ByrguhzexTSXVlTzQEjVY3AAyN1xVjgsa0sDI62qdCFiDFjB0qmwexsPi8S246jMWgc0gQ5KQlAcSbKgm0gHoEGQBRW3OSxZCXGlQx0RAj5skpTlOYjoibHqjUiZ/KxLqxvOb7DuUAhgzxHvrzY7XzKOz7zS7szarmYtM5yR5wV0pBE+ZFxcDQaabyxs455IA+S6fRKf8oIiglCPswlKVdGeYXHNTkxDSVACJFjIVMFQUnzgVJBKgBCDBgzfNbBwgWl1BWk6pUhZIV0MwhDoleZGZUIzTkcTMgGkXb2HUIeSTAICxOh0Chw4dpFXfJvaCgmbpTvcjKAM0gyYScrmVZzKPRKxF6qknVpiV8MfXsRPRMSLEAKJIMTaCvVTZJKMuVaVSL5bHYOPE5CdZyGd5EqTMmSYzRmWfOJjSlXnBkAKYbIs2YyhPTAQEkJQQDzzPRQskKZM1Il1QJ6RzJvMkEAHziTBCcwOUHm0W0NhSUqYVl/y82WMThDKVFTSucABAUQgEKiQcwKVKPEwmsnbVhwICVHtWf9sVqTnKptAGdWUwmyiJmxkSAVDtFxuvWUbYwUvucwoFoqUpFssJJJCYi0adgHYLVHXYhvYQh9hP90k/tL/mobaS2yjMhITKTmAJiQQQbk8fZQp2e7xT4/hVvyUbIxeHSfXyn9oGPYK5ulZiVuhXTiAN48ak+WJ0JT41veRsDzQb7o18K6CWxokdkD7hUf6xfH/Sj9P/AGYArEJ+j41snkq2eFYBK8x6bjhi0CFZLdyJ76tBFyW0DuB1mJBTpv1qHH7ZUxhnVoIBQklIiE5jZIIEekRRx8UpOqBlgaV2MQ2YPWPgKkTswesfCsiRy8xilAZ03IHmkamNxprXtV/myvniDBibz4GT3CquVdiKvocsdgQlpxWY9FCjpOiSdB2USzs8R5xPHTXfMVmze3cUsFKnBdMmyoCSShXRJzCxnTfpUTvKfFJEIWFRG8yZEkWUN8j9od4rNCwJRadWaZiWVogN9KfRsDYjjYi/b20Gxjl5oKDI3Rfwqp5P41x2cy35CiAObKcyQJJBKlDKSRedx4g0xbFeByqUSSEnMop4a0x0zototMJizCbEZjAJEXgq39QNfm7lYEt4zEtyDlfd3xq4o38a2p7GPFKfnRAmCUGM0ndmnfpPeKz7CcsnBiyzjmmQCrLnQhSYWSMqlFSzKDOu6QeNZOTStIKEd7ENL6OrxNeqxKSIMRM68Y+FbplbsAhIPYD3aaV4MAk3yo+ynXwqX9Uvgo8j+zB3ubjd9qrfZLY+QPOA3L6UAboSypUzx6XsrZGsAPUQePREe6lnymYZLeDGVKRLm4R6C+AE1sPEc5JUZLFxV2ZI1iVIgpJFjcW1Ne/0s766vE0RgsOhcIVbeDpM3irRPJZo6Kc7o8biqG0hKTZV7PfcecSjNrqSdwue/cOs004h8AGLADwAAtM2sNCRppVa3sFTMlrpE6hRg9xFu7xmitkYNx10BaFJQiC4TAAROiVXE6gBMb6nyR5vQ+EuCoeeTznMs/OHpGHFD2gGBxJPGZ1pj2dtLnkKTBiIyqEIXmF+JNiQb0lbQx0GBCgTcWACZ8LQOujNnYhJgDNCkkZpAg8cw0md3Cp5xcdj40x1acbahDbcDMOigAZZBgqA1FvdwqJzbGUxb2D2FVVRxUyCsG2VSRByzBNzB0It1ptekTa/KoNPKRzbqssXCheUg+N6XFSbpGtJdlTj0JUtbQsFJFtwzpBnuJ9lVPJTFhKuZdiQqIK8hHnJUEnSQFrOouEwdaZ8RgVqSCEjMInpIBUBa99Rbu7qq07JWHXHFZQp0EFOaSEZcipyLAkm+p3WMmLf40xH8tFntXaqGJv0puoKAlYMKByEm6mUrhTpPzigdIqhb2i84AGUQkRlJhKRlEApEDxAB66Pw+yUpOYpzKFsy1Ax9UGw7hRamVcB4ih5pdG+W32As4Vwj5xec9gEXJsdblRJvc3N69cYijBh18QO8/cKjcw64JsQNTwHYYk/id1apM5wRWvLg37ez8an5HOc5j8MmYHOoHiY++qLaGJlWVOn5vTF5NsHnxzPSCQ2oOGTE5CCAniSogR1016jbE9vRuTuxDucA/Y/GoFbII1WPs/jR68TQrmKrzHCBYnIrcVsTN6Yj6m/xpG8pjPMYVKc2YuuAREdFIKydTNwgd9aC4/WS+V3H58Q01/htlR+s4q/sbT407BCLmgMs2oCpstRLrdvSn7IKvup/G1FLbylAIIi41mQOHGkHk0kF+8wEKNuMQPfTenFJG48PR004aVdlT9iRJnSmsigpISUCUlIUBkTJCCSLxw6x1iRsG9mAVCss6huDGhAi24XB33io/kqFL6SjkVmTlKEWSsQemOlEwqCYtUiMMOdQtKlBQMZYzBSfNKSFKMWt0SBc2qfykC4Oxk2Vj3LAZhfeRvIAB3CZsJvIp/5OvqIkzIGmW8gdRpB2XiFIEpQo8QCASNwtpfxmrvBctwgWYP2x7OjTovjSNUbR1jNpKv82B2ad27wrPuVODL6S7lhxsQq3nIFz3jXsnqp32jyhQ9fmCgm5IUDPdAqubUnNmg9cx8da7zIrVh+XJ+wB5PNtqejDOOwtCfm5/vEJ1TMXUkeI7DT/wDIl6BQB7DWJbeZ+TYslglGUpWgjVBICuj1A6dVq1jkrymGLZC7BxMJcSPRXxE+irUd41BpU8cfUNjN9FwjZ7nrpnvpR8qGGIYaQoyCsm06ZDN++nA4i027/wAKT+X2OadYJC8zjZzQiVSNFAwIkC/dXYscFK0dklKqMrxGFCbDQDvHxH57LDZ+3VJhD107lb/2urroNxc3BneDQ74B/Puql09MnWh6bWFC0R1xfwFdu4hRTkDikgaBKrDsSqw7hSDgdpONdFJsdOo8RTHgMUy6ACFle8Z1TPUEm47KnljadlCnFqifEYB6JS4hetiMmuukg+yucBtVzDKHOsqDehgSI3QpJyjvq3Z5PFQs06P2yk9sLNe/8NKGhxA7FpPuTQuTqnv8G0vb/SXBl7Gj+qrYSAkSkrVmKbwlSsgJi/jrelZXI/MSpeL5tRJlGQry3snMFiSBTI3yeUFhY50LTcL5rpD9pMT3yKhxPI11a1LDzozKUqOakAqJUYhQgSTaLaUMXxf0uvwFLa3/AKLTmOsSIPYVffXmzcUVOklWoNyYA8aADfVxqPNE9n3VZxTRLbTGvnLTIV2EH8ivOePCqnZ2LuQfzFGpxVIeOmPWS0H4YKWoJA176I5SYxDLKmkxmKVJUrqI0nrt29gAHjWJDLRWfPV5o+/2x462pH2jjC6oybT4mhjFyl/SNlLiv7B2UbzrTDyZ2ep59tKJBkHNE5QkzM7rx3kVTsorX+RWxDh8PmWmHHOkoRBCR5iD7SetUbq3Pk4RAxQtjA/iJNjUJf7fGuXhUQtvAA3TXlW7LaJS4axHlfjOdxj692fKOxACB/DPfWu7Vx/MsuOx5iFKjiQCQO8wKwtR4m/GvQ8FHtkviX0grYr2VyZjokT2xx7Ku/lx9cfZR/LSqa9So1c1ZMnQ1rxx9cfZR/LXqMar/E9iP5aVwvrr3nOuh4m8hhb25iZ89XiPhrVq0+s/3h+yjT7NJrbt9aZtkYgRdQmONa4WYpUWyMUv/FPgj+Wim31n+9V4I/lpMxbxzHpe2oE4sj0vbSpYn8jo5l8B/KNZL5lRVZIkxuHUKi2HtleFeDqLjRaNy0HUHr3g7iO0EFx6TJNQuKFEo+zAcvc2xnHIfaStBzIUJBjxCgd4uCOIql2zgVZcyCZHoybjqgCKSuR23/k7mRZ+aWbn1F6ZuzcewHdfSwvs99Q5OeGWuizHxyxMxxyM3SSPx8NarFGn/lPskAF5tJ+mDcfWAPtHfSZjcP6Q13gCO+9V48imrJ8mNxZWLRvpm5IZGwp5QGaSlBJ80BIWYToTY6g6ddLraq+UtQEBRA4SRvB96R4CnJ/Ihr4NZwmKQtJUvLrBmyTlSlRKjE2Bm+t6lVihYts5iRISZBI6sgJgRrpwJpW2M+lbCATnJhK7Dzj0lptEzmAM6iONNODx6EgTlBMJMGTIISRpolUjTcaOUfdAJg21OVa8MkKdwiwCcqemMpMSBMzeCbjQd1Up8piDrhL/AFwf9lDeUTGF1LMeYM++5PQuU7t48e9EIoOKCLSaEWq56wfcaJzW4UGrXurYmy7JMI7B/O+rRnEpSZIKjuSDHeT6I/8AfChdi7DefWltpClr9UC4HFRNkJ+kqBpWv8kPJm0xDmKyvOWIbvzSD1g/pT1qEdW+ukrOToyLa20VrABSU5gCLEDIdCmRdJ3EWtQDKae/LS3/APkEH/8AXbHg49SSy3QukEtjj5ONg8/iA4r9GyQpUiQpfoJ8ekfqgb61jEIm5vQHJLZXyXBttlOVZGdwTPTVrPYAB+zR61ivKzT5yLYRpATnCoVSP/VEOKF5oZ1VrUkaAYxtDiShaQUq1BEgid47qx3aHJ7GF1wpwzgQVqKQAAAkk5QBNoEVs61k6zFV+JIzAWHaafhzvH0DPCsnZjjuw8WkZlMOADUxVcQqYMzWycoVJTh1CBJyix+kOFZntrB3LqRA9IcDxr0MGZ5FbRHmxKD0VycG6QCG1kHflMeNdowDxsGnD1BCj7hRuytrFuxko4T5p4jq6qbNmYoKIUlQg7wVD79fCqUhAhDDOXORVjB6JseB4GvDhXD/AHavsn4UzEAP4hFukEuC59EwY67jwrltaRJUpIHEk0Em0EkmLaMG6TAbXPDKe+oQo/mKsNo7Sz9BB6O836XjoPfRPJfYasU8E35tMFxQ9X1QfWVBA7zurk9WzK3SBmNiYtaAtGHdUg3CggwRpIO+u07Axu7DvfZNbHzSQkJDZCUgAAJAAAsAI3RQjhj0bdse6kTztexTDw6l7me8l9jOpxA+U4ZwtkEdNslIVYgmdNNeutOZjKAkDKAABEAAWAAqvKrToO34ivMM9Bg93Cahz5HkdssxYlBUi3SmdSIpM5SbG5lWZF2ldRJSd4O6OH4U1tvfkCunOkCkyoEQR1HUWpeObgzp4+XZlOLYvKQesR7RQqqZNsbNUy5lIOQ+arq4E8R+NUeOwsXA7RPtr04TUkQTg0e7NxxZVNykxmTrIkHQ2mBTJitrLUPmFpU6otISeibrXlRKlelFurOZ0pRQaO2A0FYzCji+1/qJP3U9SrQhxC9vpxTJDeMbKTPRWR0VTrlWnoqJgddUxaHreyv0i+0hxBQ4lK0KsUqAUkjgUmxpXd8nGzlKJ5pSZvCXXAB2DNYdVByC4mRNtEjcBvUTAHb8Benjkr5OXX4W7mZb1zKTDqxuyNmzY+kqTaQINN/IPk9gAEuofaxTyd4IhrfCGdUHrUM2ptMU8k1qMbK7Y2xmMK3zbDYQnU7yo8VqN1HrPYIFHKVXKjUSlURhkPlrbHyrDq3qZI+y4T/voDybcnw/iOcWAW2YUZ9Jd8g67jMfq9dN/L7ky5jsSxkWlIbbXmKpMZ1JywB9VXDSrnk9sZOEYS0kAnVawIzrOpI7AAOoCpvESdVEfhS7ZaLXNt1DPufm1SK03+FVzzlzXltNdlip9HS+2hX6kU7AufZVe64SePXQ2GkfOn8z8L0Ik9IzbqAoh1X531wwmB5sndWoYtIp+VLvzO8DMOAtBO/spJYx4WrLBym0qVY9oA076M5W7d+Ur5lojm0GVLGilC0j6I3cTfhVE9ASocBNer4fG4x2ednyKUtA21MKG1dBQUk8L5T6pO+q9aalcxUiJge+vmcOtV0oUocQkkeIFVEyIAivgiivkLv+Gv7J+FeHBuDVtf2TWckbT+DnDMFRAG/UnQdZrSuSCkoa5tBNjJgCVE+kTrujuFZozictwe0caYuS21RzwT61o69aXlTaGYWuVGnhRj+89n31XbXxXMtKcUkwmPREmSEjq1Iohh5W8K8Zqm5aOH5I5rcoG/8AxEnfUanGUki1wcYtkGyuUTTxywEL3JV6X1VCxPVrwmrUpM61lOamLY/KlxuEuy4jSZ6ae8+cOo+O6jy+G94isXivaY/YVRjdRCCePhf31W7OxyHEhbagpPVx4Eag9RozOTvPZeoZKmXd7QLt/B84iQJUOvdv30muJi1q0NpwCq3amwHH1BTTczqfNHbKrHuvTsOStMnywvZneJYIMgGN9vbRnJK+Pwg/8qT3JBV91PGE8niz+keSgcEpKz4kpA8DU2E5Apw+IaxDbi1c2oqKTlOaUlJiAI1nf3a1bHLH3IpQfsPwVX2ahGsQFCQZ/PsqTPQuQXEwCSkhQsRcKBuD1EUxbH5f4/DwA9zqR6D3zn+eQv8AzR1UsorldUISzWdkeVtpZCcSwpokxziFBaBO9QVlUkdmanbGYszkbgr3nUI6zxPAV+aX/MV2fca/Q3J79EPz6KaXmk0lXuFjSb2GsMhAi5JuVHVR4k/nSuxevVV9UrZQegVypAOoHfXVcmhs2gd3AIVujsMezSgXdjq1Sqeo/HT3Vb1ImsWOMu0bzkuhQxmCcHnJI/ZkeItSHyy5SEzhGDbzXVj2tg8PWPaONbYvQ9hr8vbP0P1B7007B4eKlYGXPJxoZuSnJxeJK8spaaQVuudYSSlKfpGIA3CSeBq+TqyXmjvKkX/aFap5O/8Ao+I7X/8ASRWU8m/0rP12/wCIVW+mTx7RpamuJB/Z/GuHMEk7wez8TNduffXjetQc37np8IkJwDfV4CuDs5vgfD8aPFTN76JMFpIqRstvq7xXg2Yjie4GrByoeFc2ZxQUlkACFm/Gde81QcvRGE7XED+I9m6mJnSlrygf2YfrEfwrocaXmI3L+2xS5HMpXjWUKSFJUVgpIkEc2uxB10pp5V+T1bcu4QFSdSybrT+rOqh9E34ZtKWuQ3/UMP8AWV/prreHPuqucmpEEYpxPzpg8a4yvM2ooULEbjBulSd/YfZWi8j+UOHxCg2+vmXDAAPmLP0Vq80/ROu4mlDyhf8AUcR9ZP8AAml57zT2GtnijPs6GWUNJn6Ww+zGkaIE8SJPt07oouq3k3/ZMP8Aqm/4RVjULVaRRbfZ6ajWipBX1C2bRV4nCScyDlV7D9YffQxxahYtrnqEjuO+rVzzq4TXKTCq+z//2Q==" 
    },
    {
      title: "Nuestras colecciones",
      description: "Salas de estar: Sofás, sillones, mesas de centro ¡todo para tu sala perfecta! Espacios de trabajo: Escritorios y sillas...",
      image: "https://i.ytimg.com/vi/Nx6p1FUDiZU/maxresdefault.jpg" 
    },
    {
      title: "Ofertas increíbles",
      description: " ¡Hasta un 30% de descuento en colecciones seleccionadas! Envío gratuito en compras mayores a $5,000.",
      image: "https://images.homify.com/v1459342914/p/photo/image/1429671/6.jpg" 
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center max-w-[1240px] min-h-screen mx-auto px-4 py-8 space-y-6 bg-[#0b0d0f]">
      <div className="grid grid-cols-1 gap-6 w-full">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MainSection;